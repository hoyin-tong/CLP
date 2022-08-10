pipeline {
	environment {
    imagename = "device-api"
    dockerImage = ""
		ecrLink="https://${env.AWS_ACCT}.dkr.ecr.${env.AWS_REGION}.amazonaws.com"
		ecrcredentials="ecr:${env.AWS_REGION}:my.aws.credentials"
  } 
	
  agent any    
  stages {  
    stage("build") {      
	    steps {
      	echo "The build number is ${env.BUILD_NUMBER}";
				echo "The ecrLink is ${env.ecrLink}";
				echo "The ecrcredentials is ${env.ecrcredentials}";
	    }
    }	
	}
}
