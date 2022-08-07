let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let expect = chai.expect;

chai.use(chaiHttp);
describe('Device', () => {
  var deviceId;
  describe('POST', () => {
    it('/devices', (done) => {
      const data = {
        name:'123',//faker.lorem.word(25),
        owner:'456',//faker.name.firstName(),
        productType:'789',//faker.lorem.word(15),
    };
    
    chai.request(app)
        .post('/devices')
        .send(data)
        .end((err, res) => {
          expect(res.body).to.deep.include(data);
          deviceId = res.body.id;
          done();
        });
    });
  });


  describe('GET', () => {
    it('/devices', (done) => {
      chai.request(app)
          .get('/devices')
          .end((err, res) => {
            expect(res.status).to.be.eq(200);            
            expect(res.body).to.be.a('array');            
            done();
          });
    });

    it('/devices/:id', (done) => {
      chai.request(app)
          .get(`/devices/${deviceId}`)
          .end((err, res) => {       
            expect(res.status).to.be.eq(200);
            expect(res.body.id).to.be.eq(deviceId);
            done();
          });
    });
  });

  describe('PUT', () => {
    it('/devices/:id', (done) => {
      const data = {name:'aaa'};//faker.lorem.word(25)};//'aaa'};//
    
    chai.request(app)
        .put(`/devices/${deviceId}`)
        .send(data)
        .end((err, res) => {          
          expect(res.status).to.be.eq(200);
          expect(res.body).to.be.an('array').that.includes(1);

          //get the request again
          chai.request(app)
          .get(`/devices/${deviceId}`)
          .end((err2, res2) => {       
            expect(res2.status).to.be.eq(200);
            expect(res2.body).to.deep.include(data);
            done();
          });
        });
    });
  });

  describe('DELETE', () => {
    it('/devices/:id', (done) => {
      chai.request(app)
        .delete(`/devices/${deviceId}`)        
        .end((err, res) => {          
          expect(res.status).to.be.eq(200);
          expect(res.body).to.be.eq(1);

          //get the request again
          chai.request(app)
          .get(`/devices/${deviceId}`)
          .end((err2, res2) => {       
            expect(res2.status).to.be.eq(200);
            expect(res2.stabodytus).to.be.an('undefined');
            done();
          });
        });
    });
  });

});
