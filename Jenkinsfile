pipeline {
	environment {
    dockerImage = ""
		registry = "kevintong103/device-api"
    registryCredential = 'DockerHub'
  } 
	
  agent any    
  stages {  
    stage("log") {      
	    steps {
      	echo "The build number is ${env.BUILD_NUMBER}";
				echo "The ecrLink is ${env.ecrLink}";
				echo "The ecrcredentials is ${env.ecrcredentials}";
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
