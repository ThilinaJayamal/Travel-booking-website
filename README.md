# HorizonStay - Travel Booking Website

HorizonStay is a comprehensive travel booking website that allows users to search for and book hotels, flights, and rental cars. The platform aims to provide a seamless and intuitive experience for planning and organizing travel itineraries.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Features

- **User Authentication:** Secure user registration and login.
- **Hotel Search & Booking:**
    - Search for hotels by location, check-in/check-out dates, and number of guests.
    - View hotel details, including descriptions, amenities, and images.
    - Book hotel rooms with various room types.
- **Flight Search & Booking:**
    - Search for flights by origin, destination, dates, and number of passengers.
    - View flight details, including airlines, departure/arrival times, and prices.
    - Book flight tickets.
- **Car Rental Search & Booking:**
    - Search for rental cars by pickup/drop-off location and dates.
    - View car details, including car type, features, and rental rates.
    - Book rental cars.
- **User Dashboard:**
    - View and manage past and upcoming bookings.
    - Update user profiles.
- **Admin Panel (Optional/Planned):**
    - Manage hotels, flights, and cars.
    - View user bookings.
    - User management.
- **Responsive Design:** Optimized for various devices (desktop, tablet, mobile).

## Technologies Used

* **Frontend:**
    * HTML5
    * CSS3 (with potentially a framework like Bootstrap or Tailwind CSS)
    * JavaScript (with potentially a framework/library like React, Angular, or Vue.js)
* **Backend:**
    * Node.js (Express.js)
    * MongoDB (Mongoose ODM)
* **Database:**
    * MongoDB
* **Other Tools/Libraries (Potential):**
    * Passport.js for authentication
    * Cloudinary for image storage
    * Stripe/PayPal for payment gateway integration

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* Node.js (LTS version recommended)
* npm (Node Package Manager) or Yarn
* MongoDB (either a local instance or access to a cloud-hosted instance like MongoDB Atlas)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/ThilinaJayamal/Travel-booking-website.git](https://github.com/ThilinaJayamal/Travel-booking-website.git)
    cd Travel-booking-website
    ```

2.  **Install frontend dependencies:**

    ```bash
    cd client  # Or the appropriate frontend directory
    npm install
    # or
    yarn install
    ```

3.  **Install backend dependencies:**

    ```bash
    cd ../server  # Or the appropriate backend directory
    npm install
    # or
    yarn install
    ```

4.  **Set up environment variables:**

    Create a `.env` file in the `server` directory (or the root of your backend). Add the following variables, replacing the placeholders with your actual values:

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=a_very_secret_key_for_jwt
    # Add any other necessary environment variables (e.g., API keys for external services)
    ```

    * `MONGO_URI`: Your MongoDB connection string. For a local MongoDB instance, it might be `mongodb://localhost:27017/horizonstay`. For MongoDB Atlas, get your connection string from the Atlas dashboard.
    * `JWT_SECRET`: A strong, random string used for signing JWTs.

5.  **Run the application:**

    * **Start the backend server:**

        ```bash
        cd server
        npm start
        # or
        node server.js
        ```

    * **Start the frontend development server:**

        ```bash
        cd client
        npm start
        ```

    The frontend will typically run on `http://localhost:3000` and the backend on `http://localhost:5000` (or the port you configured).

## Usage

Once the application is running:

1.  Open your web browser and navigate to the frontend URL (e.g., `http://localhost:3000`).
2.  Register a new account or log in with existing credentials.
3.  Explore the various sections:
    * Search for hotels by entering your desired destination and dates.
    * Browse available flights and book your tickets.
    * Find and rent cars for your trips.
4.  Manage your bookings from your user dashboard.

## Contributing

Contributions are welcome! If you'd like to contribute to HorizonStay, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `bugfix/fix-bug-name`.
3.  Make your changes and commit them with clear, concise messages.
4.  Push your branch to your forked repository.
5.  Open a pull request to the `main` branch of this repository, describing your changes in detail.

Please ensure your code adheres to the project's coding style and includes appropriate tests if applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, suggestions, or feedback, feel free to contact the project maintainer:

Thilina Jayamal - [thilinajayamal@email.com](mailto:thilinajayamal@email.com) (Replace with actual email)

## Acknowledgements

* Inspired by popular travel booking platforms.
* Special thanks to all the open-source libraries and frameworks used in this project.
* (Add any other relevant acknowledgements)