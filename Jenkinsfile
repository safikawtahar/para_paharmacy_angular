pipeline {
    agent any // Utilise le nœud maître
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
        stage('Run Tests') {
            steps {
                sh 'npm run test-headless'
            }
        }
        stage('Build Angular App') {
            steps {
                sh 'npm run build --prod'
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
