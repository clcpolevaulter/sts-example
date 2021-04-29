#!/usr/bin/env groovy

pipeline {
    agent {
        label 'beta'
    }
    options {
        ansiColor('xterm')
        disableConcurrentBuilds()
        timestamps()
    }
    stages {
        stage('demo') {
            steps {
                sh '''
                docker run -w /workspace -v $(pwd):/workspace  node:12-alpine npm run test
                '''
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
