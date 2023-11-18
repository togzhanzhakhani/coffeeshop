node {
    stage('Build Angular') {
        dir('Frontend/Coffee-Berw') {
            echo 'Building Angular app...'
            sh 'npm install'
            sh 'ng build'
        }
    }

    stage('Build and Test Django') {
        dir('Backend_py') {
            echo 'Running Django tests...'
            sh 'python manage.py test'
        }
    }

    stage('Deploy') {
        echo 'Deploying the application...'
    }
}
