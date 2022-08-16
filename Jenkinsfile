pipeline {
	environment {
    dockerImage = ""
		registry = "kevintong103/device-api"
    registryCredential = 'docker-hub'
  } 
	
  agent any    
  stages {  
    stage("log") {      
	    steps {
      	echo "The build number is ${env.BUILD_NUMBER}";
	    }
    }
		stage("build") {      
       steps {
        script {
					dockerImage = docker.build("${registry}:${env.BUILD_ID}")
        }
      } 
    }
		stage("push") {    
	  	steps {
	    	script {
		  		docker.withRegistry('',registryCredential) {
		    		dockerImage.push()
					}
		  	}		  
			}
		}
		
		
	}
}
