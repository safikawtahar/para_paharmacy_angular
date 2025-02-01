pipeline {
    agent any
    environment {
        DOCKER_HOST = "tcp://localhost:2375" // Utiliser le socket TCP
        DOCKER_IMAGE = "ton-dockerhub-username/angular-app" // Remplace par ton username Docker Hub
    }
    stages {
        stage('Check Docker') {
            steps {
                sh 'docker version'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub-credentials', variable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u "ton-dockerhub-username" --password-stdin'
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 80:80 $DOCKER_IMAGE'
            }
        }
    }
}
