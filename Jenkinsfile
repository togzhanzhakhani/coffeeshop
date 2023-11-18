pipeline {
    agent any

    stages {
        stage('Build Angular') {
            steps {
                dir('Frontend/Coffee-Berw') {
                    echo 'Building Angular app...'
                    sh 'npm install'
                    sh 'ng build'
                }
            }
        }

        stage('Build and Test Django') {
            steps {
                dir('Backend_py') {
                    echo 'Running Django tests...'
                    sh 'python manage.py test'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
}
