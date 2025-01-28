pipeline {
    agent any
    environment {
  "hosts": ["tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"]
    }
    stages {
        stage('Check Docker') {
            steps {
                sh 'docker version'
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
