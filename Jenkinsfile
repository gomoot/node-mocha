pipeline {
  agent any
  tools {nodejs "node"}
 
  stages {    
    stage('Example') {
      steps {
        bat  'npm config ls'
      }
    }
  
    stage('Cloning Git') {
      steps {
        git 'https://github.com/gomoot/node-mocha.git'
      }
    }
    
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         bat 'npm test'
      }
    }    
    
  }     
}