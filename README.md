# ![Quizopia Logo](https://github.com/gaureshpai/ggquizopia/raw/main/public/logo.png) Quizopia

Welcome to Quizopia, a Marvel-themed quiz application that tests your knowledge about Marvel characters and their universe. This README provides an overview of the application, its structure, and instructions for setup and use.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Data Structure](#data-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Quizopia is a fun and engaging quiz app that challenges users with questions about Marvel characters. The app includes detailed character profiles and a variety of quiz questions to test your Marvel knowledge.

## Features

- **Character Profiles**: Detailed profiles for each character, including descriptions, skills, images, and more.
- **Quiz Questions**: A wide range of questions covering different Marvel characters and their stories.
- **User-friendly Interface**: Easy-to-use interface for seamless quiz taking.

## Technologies Used

- **Next.js**: A React framework for building fast and user-friendly web applications.
- **HTML & CSS**: For structuring and styling the web pages.
- **JavaScript**: The programming language used for developing the application logic.
- **JSON**: Used to retrieve data from the API for character profiles and quiz questions.

## Installation

To run Quizopia locally, follow these steps:

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/gaureshpai/ggquizopia.git
    ```
2. **Navigate to the Project Directory**:
    ```sh
    cd ggquizopia
    ```
3. **Install Dependencies**:
    ```sh
    npm install
    ```
4. **Start the Application**:
    ```sh
    npm run dev
    ```

The application should now be running on `http://localhost:3000`.

## Usage

1. Open the app in your web browser.
2. Navigate through the character profiles to learn more about your favorite Marvel heroes and villains.
3. Take quizzes by answering multiple-choice questions.
4. Check your score and see how well you know the Marvel universe!

## Data Structure

The quiz content and character profiles are structured in JSON format. Below is an example of the data structure used for characters and quiz questions.

### Character Profile

```json
{
  "id": 1,
  "name": "Thor",
  "slug": "thor",
  "skills": [
    "Godlike strength",
    "Control over lightning",
    "Flight",
    "Weather manipulation",
    "Immortality",
    "Superhuman agility",
    "Combat prowess",
    "Mjolnir mastery"
  ],
  "description": "Thor, the God of Thunder, wields his mighty hammer Mjolnir to protect the realms from cosmic threats...",
  "age": "Thousands of years old",
  "avatar": "https://github.com/gaureshpai/ggquizopia/raw/main/public/images/Thor.jpg",
  "images": [
    "https://github.com/gaureshpai/ggquizopia/raw/main/public/images/thor1.jpg",
    "https://github.com/gaureshpai/ggquizopia/raw/main/public/images/thor2.webp"
  ],
  "occupations": [
    "Protector of the Nine Realms"
  ]
}
```

### Quiz Question

```json
{
  "id": "GKfrCbCN5f",
  "title": "Who wields the hammer Mjolnir?",
  "answers": [
    "Thor",
    "Iron Man",
    "Hulk",
    "Captain America"
  ],
  "correct_answer": "Thor"
}
```

## Contributing

We welcome contributions to Quizopia! If you would like to contribute, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button on the GitHub page.
2. **Clone Your Fork**: 
    ```sh
    git clone https://github.com/gaureshpai/ggquizopia.git
    ```
3. **Create a Branch**: 
    ```sh
    git checkout -b feature/your-feature-name
    ```
4. **Make Your Changes**: Implement your feature or fix.
5. **Commit Your Changes**:
    ```sh
    git commit -m "Add your commit message"
    ```
6. **Push to Your Branch**:
    ```sh
    git push origin feature/your-feature-name
    ```
7. **Open a Pull Request**: Submit your changes for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for using Quizopia! Enjoy testing your Marvel knowledge!

*Owner: Gauresh Pai*