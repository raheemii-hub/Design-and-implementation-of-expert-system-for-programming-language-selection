# expert-system-quiz
[![Github License](https://img.shields.io/github/license/HootyHub/expert-system-quiz)](/LICENSE)
[![Github Deploy Status](https://img.shields.io/github/actions/workflow/status/HootyHub/expert-system-quiz/deploy.yml)]()
[![Github Pages](https://img.shields.io/github/deployments/HootyHub/expert-system-quiz/github-pages)]()

A web-based application that uses the Vue framework. The quiz is designed to ask users a series of generic single-selection questions that target their interests and hobbies.

Demo: https://hootyhub.github.io/expert-system-quiz

## Expert system
An expert system is a type of AI software that mimics the decision-making ability of a human expert in a specific field using a knowledge base and inference engine. This makes it a fun and interactive way to learn about different programming languages that may be suitable for the user.

### Example question
The quiz adjusts the questions based on the user's current score to better match their interests and hobbies.
<p align="center">
<img width="55%" src="https://user-images.githubusercontent.com/49527545/224165853-2b6482f3-868d-4493-b8dc-b37e409b44c2.png" />
</p>

### Example result
Based on the weighted score calculated from the user's answers, the expert system returns the programming language that fits the user the most.
<p align="center">
<img src="https://user-images.githubusercontent.com/49527545/224165402-de3804d9-d4eb-4fa5-994a-2aeb0688f6f1.png" />
</p>

## Development
It is recommended to use [Docker](https://www.docker.com/), which automates the process of downloading and installing the necessary dependencies

To run  using Docker, follow these steps:

### 1. Start the container:
```sh
docker-compose up -d
```

### 2. Install npm dependencies:
```sh
docker-compose exec node npm install
```

### 3. Start the development server:
```sh
docker-compose exec node npm run dev
```

## Origins
This project was created as part of a "Methods of Artificial Intelligence" course project in college.

#
Demo: https://hootyhub.github.io/expert-system-quiz
