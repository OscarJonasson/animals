pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage("build"){
            steps{
                sh 'npm run moro'
                echo 'building app...'

            }
        }
        stage("test"){
            steps{
                echo 'testing app...'
            }

        }
        stage("deliver"){
            steps{
                echo 'delivering app...'
            }

        }

    }
} 