pipeline {
    agent any // Utilise le nœud maître
  environment {
        DOCKER_HOST = "tcp://localhost:2375"
    }
    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'master', url: 'https://github.com/safikawtahar/para_paharmacy_angular.git'
            }
        }
        stage('Install Node modules') {
            steps {
                sh 'npm install'
            }
        }
      
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t angular-app .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 80:80 angular-app'
            }
        }
    }
}
