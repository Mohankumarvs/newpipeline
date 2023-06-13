pipeline {
  agent any

  stages {
    stage('Install Playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }

    stage('Run Tests') {
      steps {
        sh '''
          npm run posttest
        '''
      }
      post {
        success {
          archiveArtifacts artifacts: 'homepage-*.png', followSymlinks: false
          sh 'rm -rf *.png'
        }
      }
    }
  }
}