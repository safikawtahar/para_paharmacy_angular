node {
    
        stage('Chekout SCM') {
            
                git branch: 'master', url: 'https://github.com/safikawtahar/para_paharmacy_angular.git'
            
        }
        stage('Install node modules') {
                sh 'npm install'
        }
        stage('test') {
        sh 'npm run test-headless'
}
        stage('Build Angular app') {
                sh 'npm run build --prod'
            }
        
    }

