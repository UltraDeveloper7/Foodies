# Foodies - Online Food Delivery Web App

## Overview
This repository contains the source code for **Foodies**, an online food delivery web application. The application allows users to browse menus, place orders, and manage their profiles. It is built using Node.js, Express, Handlebars for templating, and uses sessions for managing user authentication and state.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Clone from GitHub](#clone-from-github)
  - [Download as ZIP](#download-as-zip)
- [Usage](#usage)
- [Running the Application](#running-the-application)
- [Directory Structure](#directory-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Disclaimer](#disclaimer)
- [Acknowledgements](#acknowledgements)
- [Deployment](#deployment)

## Features
- User authentication and session management
- Menu browsing and food item details
- Order placement and order history
- User profile management
- Responsive design for mobile and desktop views

## Technologies Used
- Node.js
- Express.js
- Handlebars.js
- Express Sessions
- SQLite (for data storage)
- Bootstrap (for responsive design)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- SQLite installed and running

## Installation
You can install the application by either cloning it from GitHub or downloading it as a ZIP file.

### Clone from GitHub
1. Clone the repository:
    ```bash
    git clone https://github.com/UltraDeveloper7/Foodies.git
    cd Foodies
    ```

### Download as ZIP
1. Download the ZIP file from GitHub:
    - Go to the [repository page](https://github.com/UltraDeveloper7/Foodies).
    - Click on the "Code" button and select "Download ZIP".
    - Extract the downloaded ZIP file.
    - Navigate to the extracted directory:
    ```bash
    cd Foodies-main
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=3000
    SESSION_SECRET=your-session-secret
    ```

## Usage
To use the Foodies application, follow the instructions in the "Running the Application" section to start the server, then navigate to the application in your web browser. You can register a new user, browse the menu, place orders, and manage your profile through the user interface.

## Running the Application
1. Start the application:
    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000`.

## Directory Structure
```
Foodies/
├── .vscode/
│   └── ...
├── app-setup/
│   ├── app-setup-session.mjs
├── controller/
│   ├── cart-controller.mjs
│   ├── checkout-controller.mjs
│   ├── footer-pages-controller.mjs
│   ├── home-controller.mjs
│   ├── login-controller.mjs
│   ├── order-controller.mjs
│   ├── search-controller.mjs
│   ├── store-controller.mjs
│   └── user-profile-controller.mjs
├── docs/
│   └── ...
├── model/
│   ├── db/
│   │   └── ...
│   ├── sessions/
│   │   └── ...
│   └── model.mjs
├── node_modules/
│   └── ...
├── public/
│   ├── css/
│   │   └── ...
│   ├── images/
│   │   └── ...
│   └── javascript/
│       └── ...
├── routes/
│   └── foodies-routes.mjs
├── views/
│   ├── layouts/
│   │   └── main.hbs
│   ├── partials/
│   │   ├── cart-modal.hbs
│   │   ├── footer.hbs
│   │   ├── header.hbs
│   │   ├── login.hbs
│   │   ├── about.hbs
│   │   ├── checkout.hbs
│   │   ├── home.hbs
│   │   ├── privacy-policy.hbs
│   │   ├── search.hbs
│   │   ├── store.hbs
│   │   ├── terms-of-use.hbs
│   │   └── user-profile.hbs
├── .env
├── .hintrc
├── app.mjs
├── LICENSE
├── package-lock.json
├── package.json
├── Procfile
└── start.mjs
```

## Scripts
- `npm start`: Starts the application
- `npm run dev`: Starts the application with nodemon for development

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or issues, please contact [konstantinostoutounas@gmail.com](mailto:konstantinostoutounas@gmail.com).

## Disclaimer
This application is a project created for educational purposes. The features and functionalities may not be fully comprehensive or secure for production use.

## Acknowledgements
Special thanks to all the contributors and open-source libraries that made this project possible.

## Deployment
The Foodies application is deployed on Heroku. You can access it at [https://efoodies-f3555c26d697.herokuapp.com/](https://efoodies-f3555c26d697.herokuapp.com/).

---

Thank you for using Foodies! Happy ordering!
