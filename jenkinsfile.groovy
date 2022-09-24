def spinnerImage
pipeline{
  agent any
  options{
    timestamps()
    timeout(time: 2, unit: 'HOURS')   // timeout on whole pipeline job
  }

  stages{
    stage("Build Image"){
      steps{
	script{
	  spinnerImage = docker.build("spinner")
	}
      }
    }

    stage("Push Image"){
      steps{
	script{
	  docker.withRegistry("https://registry.litelot.us", "PrivateDockerCreds"){
	    spinnerImage.push("latest")
	  }
	}
      }
    }
  }
}
