pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'master', url: 'https://github.com/safikawtahar/para_paharmacy_angular.git'
            }
        }
        stage('Install node modules') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npm run test-headless'
            }
        }
        stage('Build Angular app') {
            steps {
                sh 'npm run build --prod'
            }
        }
    }
}
