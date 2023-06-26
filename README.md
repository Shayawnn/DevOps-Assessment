# DevOps-Assessment


## Table of Contents

1. [Dockerfile](#dockerfile)
2. [Docker Compose](#docker-compose)
3. [Azure Pipeline](#azure-pipeline)

## Dockerfile <a name="dockerfile"></a>
Dockerizing the Applications

Both applications have been Dockerized. Docker images have been built and can be pushed to Docker Hub.

To push changes to Docker Hub, you can use the following commands (ensure you're in the correct directory):

1. For the Flask application:
    ```bash
    docker build -t shayawn/devops-assessment-app-api .
    docker push shayawn/devops-assessment-app-api
    ```
2. For the React application:
    ```bash
    docker build -t shayawn/devops-assessment-app-frontend .
    docker push shayawn/devops-assessment-app-frontend
    ```

The welcome message for both applications can be configured at runtime using the WELCOME (Flask) and REACT_APP_WELCOME (React) environment variables:

`docker run -p 3000:80 -e REACT_APP_WELCOME="Your welcome message" -e REACT_APP_API_URL="http://localhost:5002/api" shayawn/devops-assessment-app-frontend`

## Docker Compose <a name="docker-compose"></a>

The applications can be started in separate Docker containers using Docker Compose. The Docker Compose configuration is located in the docker-compose.yml file at the root of the repository.

To start the applications, navigate to the root of the project directory and run:

`docker-compose -f docker-compose.yml up -d`

if you encounter any CORS policy-related error, you may need to adjust the CORS configuration on your Flask app to allow requests from your React app's origin.


## Azure Pipeline <a name="azure-pipeline"></a>

An Azure Pipeline has been set up to automatically build Docker images for the Flask and React applications, run Flask API tests, and push the Docker images to Docker Hub when changes are merged into the main branch. The pipeline will only proceed to the pushing stage if all tests pass.

The pipeline is defined in the `azure-pipelines.yml` file at the root of the repository. This file defines three jobs:

1. Build: Prints a "Hello, world!" message to the console. (This is a placeholder step—you can replace it with actual build steps as needed.)

2. Test: Installs Python dependencies, runs tests located in the `api/tests` directory, and publishes the test results to Azure DevOps.

3. Push: Logs into Docker Hub, builds Docker images for the Flask and React applications, and pushes them to Docker Hub. This step is executed only if all tests pass.

The pipeline is configured to run on the latest Ubuntu virtual machine image.

To configure the Docker Hub credentials, replace `$(dockerhub.username)` and `$(dockerhub.password)` in the `azure-pipelines.yml` file with your Docker Hub username and password. Remember to store these credentials as secrets in Azure Pipelines to avoid exposing them in your `azure-pipelines.yml` file.