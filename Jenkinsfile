pipeline {
    agent {
        docker {
            image 'node:18'  // Utiliser l'image Node.js de Docker
            label 'docker'   // Assurez-vous que Jenkins est configuré pour utiliser Docker
        }
    }
    stages {
        stage('Checkout SCM') {
            steps {
                // Cloner le dépôt Git contenant votre application Angular
                git branch: 'master', url: 'https://github.com/votreutilisateur/votreprojet.git'
            }
        }
        stage('Install Node modules') {
            steps {
                // Installer les modules nécessaires avec npm
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Lancer les tests Angular (optionnel)
                sh 'npm run test-headless'
            }
        }
        stage('Build Angular App') {
            steps {
                // Exécuter la commande de build pour la production
                sh 'npm run build --prod'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Construire l'image Docker en utilisant le Dockerfile
                sh 'docker build -t angular-app .'
            }
        }
        stage('Run Docker Container') {
            steps {
                // Lancer le conteneur Docker pour vérifier le build
                sh 'docker run -d -p 80:80 angular-app'
            }
        }
    }
    post {
        always {
            // Supprimer les conteneurs Docker après l'exécution du pipeline
            sh 'docker ps -aq | xargs docker rm -f'
            // Supprimer les images Docker après l'exécution du pipeline (optionnel)
            sh 'docker rmi angular-app'
        }
    }
}
