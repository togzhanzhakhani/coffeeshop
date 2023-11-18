pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
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
                    bat 'cd Backend_py && start cmd /c "python manage.py runserver"'

                    sleep time: 10, unit: 'SECONDS'

                    echo 'Running Angular locally...'
                    bat 'cd Frontend/Coffee-Berw && start cmd /c "ng serve"'
                }
            }
        }
    }
}
