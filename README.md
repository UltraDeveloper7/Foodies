# Foodies - Online Food Delivery Web App

## Overview
This repository contains the source code for **Foodies**, an online food delivery web application. The application allows users to browse menus, place orders, and manage their profiles. It is built using Node.js, Express, Handlebars for templating, and uses sessions for managing user authentication and state.

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
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/foodies.git
    cd foodies
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/foodies
    SESSION_SECRET=your-session-secret
    ```

## Running the Application
1. Start the MongoDB server:
    ```bash
    mongod
    ```

2. Start the application:
    ```bash
    npm start
    ```

3. Open your browser and go to `http://localhost:3000`.

## Directory Structure
```
foodies/
├── public/
│   ├── css/
│   ├── images/
│   └── js/
├── routes/
│   ├── index.js
│   ├── users.js
│   └── orders.js
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── partials/
│   │   └── header.handlebars
│   └── index.handlebars
├── .env
├── app.js
├── package.json
└── README.md
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
If you have any questions or issues, please contact [your-email@example.com](mailto:your-email@example.com).

---

Thank you for using Foodies! Happy ordering!










