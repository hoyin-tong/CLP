let chai = require('chai');
let chaiHttp = require('chai-http');
let assert = require('assert');
let app = require('../app');

chai.use(chaiHttp);
describe('GET', () => {
      it('Check Device API', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.body.message,'Devices API');
              done();
            });
      });
  });