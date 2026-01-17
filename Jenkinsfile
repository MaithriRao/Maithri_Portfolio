pipeline {
    agent { label 'dev' }

    environment {
        PROJECT_NAME   = "ab-portfolio"
        DOCKER_REPO    = "anbe00007/ab-portfolio"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: "https://github.com/AnkitaB5007/ab-portfolio.git", branch: "create-pipeline"
            }
        }

        stage('Build') {
            steps {
                echo "Dependencies installed from package-lock.json"
                sh "docker build -f Dockerfile-multi-serve -t ${DOCKER_REPO}:${BUILD_NUMBER} -t ${DOCKER_REPO}:latest ."
            }
        }
        
        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "dockerHubCreds",
                    passwordVariable: "dockerHubPass",
                    usernameVariable: "dockerHubUser"
                )]) {
                    script {
                        echo "Logging into DockerHub..."
                        sh "echo ${dockerHubPass} | docker login -u ${dockerHubUser} --p ${dockerHubPass}"

                        echo "Pushing images..."
                        sh "docker push ${DOCKER_REPO}:${BUILD_NUMBER}"
                        sh "docker push ${DOCKER_REPO}:latest"
                        
                        echo "Images pushed successfully to DockerHub."
                    }
                }
            }
        }

        stage('Tests') {
            steps {
                echo "Running tests..."
                // Example: sh "npm test"
            }
        }
        
        stage('Package') {
            steps {
                echo "Archiving build artifacts..."
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
}
