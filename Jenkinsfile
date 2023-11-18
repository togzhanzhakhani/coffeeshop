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

        stage('Local Deployment') {
            steps {
                script {
                    echo 'Running Django server locally...'
                    bat 'cd Backend_py && python manage.py runserver'

                    sleep time: 20, unit: 'SECONDS'

                    echo 'Running Angular locally...'
                    bat 'cd Frontend/Coffee-Berw && ng serve'
                }
            }
        }

    }
    
    triggers {
        githubPush()
    }
}
