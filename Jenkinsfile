pipeline {
  agent any
  
  stages {
    stage('Build') {
      steps {
        // Clone the Git repository
        git 'https://github.com/your-username/your-repository.git'
        
        // Install project dependencies
        sh 'npm ci' // or any other command for installing dependencies
        
        // Build your project
        sh 'npm run build' // or any other build command specific to your project
      }
    }
    
    stage('Test and Generate Allure Report') {
      steps {
        // Run tests
        sh 'npm run test'
        
        // Generate the Allure report
        sh 'npm run posttest'
      }
    }
  }
  
  post {
    always {
      // Archive Allure report artifacts
      archiveArtifacts artifacts: 'allure-results/*'
      
      // Publish Allure report
      allure([
        includeProperties: false,
        jdk: '10.0.19',
        results: [[path: 'allure-results']]
      ])
    }
  }
}
