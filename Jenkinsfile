pipeline {
    agent any

    stages {
        stage('Build Angular') {
            steps {
                dir('Frontend/Coffee-Berw') {
                    echo 'Building Angular app...'
                    bat 'npm install'
                    bat 'ng build'

                }
            }
        }

        stage('Build and Test Django') {
            steps {
                dir('Backend_py') {
                    echo 'Running Django tests...'
                    bat 'python manage.py test'
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
