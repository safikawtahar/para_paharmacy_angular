pipeline {
    agent any
    environment {
        DOCKER_HOST = "tcp://localhost:2375" // Utiliser le socket TCP
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
