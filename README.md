# Service Review Application

Welcome to the Service Review Application, a platform designed to help users explore, review, and manage various services seamlessly. This full-stack application combines user authentication, CRUD operations, and dynamic filtering for a comprehensive experience.

---

## 🚀 Live Demo
[Click here to visit the live application](https://service-review-7e78b.web.app)

---

## 📖 Table of Contents
- [Project Purpose](#-project-purpose)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation Guide](#-installation-guide)
- [Usage Instructions](#-usage-instructions)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Project Purpose
The Service Review Application provides users with a platform to discover services, share feedback, and manage reviews. With intuitive features and responsive design, users can:

- **Add and manage services.**
- **Explore services from various categories.**
- **Post and manage detailed reviews.**
- **Navigate a user-friendly and secure environment.**

---

## 🚀 Key Features

### User Features
1. **Authentication System**
   - User login and registration with email and password.
   - Firebase authentication.
   - Secure token handling with JWT.

2. **Service Management**
   - Add, update, and delete services.
   - Filter services by category.
   - Dynamic search functionality for title.

3. **Reviews Management**
   - Post detailed reviews with ratings.
   - Edit and delete reviews directly from the UI.
   - Manage your reviews in a dedicated section.

### Advanced Features
- **Dynamic Page Titles:** Each route dynamically updates the browser tab title.
- **Toast Notifications:** Feedback for user actions, such as adding, updating, or deleting.
- **Meet Our Partners Section:** Highlights partner collaborations.
- **404 Page:** Custom "Page Not Found" error page.

---

## 🛠️ Tech Stack

### Frontend
- **ReactJS** with **React Router** for dynamic routing.
- **TailwindCSS** for styling.
- **Framer Motion** for animations.
- **Axios** for API interactions.

### Backend
- **Node.js** with **Express.js**.
- **MongoDB** with Mongoose for database operations.
- **JWT** for authentication.
- **dotenv** for environment variable management.

---

## 🛠️ Installation Guide

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git** (for cloning the repository)
- **MongoDB** (for the database)

### Step 1: Clone the Repository
1. Open your terminal or command prompt.
2. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/noushinsaad/service-review-client-site.git
   ```
3. Navigate to the project directory:
   ```bash
   cd service-review-client-site
   ```

### Step 2: Install Dependencies
1. Install the required dependencies for the client-side:
   ```bash
   npm install
   ```

2. If you also want to set up the server-side, clone the server repository:
   ```bash
   git clone https://github.com/noushinsaad/service-review-server-site.git
   ```
3. Navigate to the server directory and install its dependencies:
   ```bash
   cd service-review-server-site
   npm install
   ```

### Step 3: Set Up Environment Variables
1. Create a `.env` file in the root of the client directory:
   ```bash
   touch .env
   ```
2. Add the following environment variables (replace with your own values):
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```

3. For the server, create a `.env` file in the server directory:
   ```bash
   touch .env
   ```
4. Add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/service-review
   JWT_SECRET=your_jwt_secret_key
   ```

### Step 4: Start the Development Server
1. Start the client-side development server:
   ```bash
   npm run dev
   ```
2. If you're using the server-side, start the server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 🚀 Usage Instructions

### 1. Register or Login
- Use the **Register** button to create a new account.
- If you already have an account, use the **Login** button to sign in.

### 2. Explore Services
- Browse services by category or use the search bar to find specific services.
- Click on a service to view details and reviews.

### 3. Add a Service
- Navigate to the **Add Service** page.
- Fill out the form with the service details and submit.

### 4. Post a Review
- Go to a service's detail page.
- Scroll down to the reviews section and click **Add Review**.
- Rate the service and write your feedback.

### 5. Manage Your Reviews
- Visit the **My Reviews** section to view, edit, or delete your reviews.

---

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your commit message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.



---

Enjoy using the Service Review Application! If you have any questions or feedback, feel free to open an issue or contact the maintainers. 🚀