# **Erino Contact Management System**

> **Assignment by Atharva Awatade**

![image](https://github.com/user-attachments/assets/31408e7e-a1fe-4855-9184-d34d83fc2c1a)

![image](https://github.com/user-attachments/assets/5c0c1b77-c3e7-4322-b8eb-40e075e7703c)



## **Introduction**

The **Erino Contact Management System** is a full-stack web application designed for managing contact information efficiently. It is a feature-rich project that demonstrates CRUD (Create, Read, Update, Delete) operations on contacts while adhering to best practices in React.js, Node.js, MongoDB, and Material-UI (MUI). This project was developed as part of the Erino Assignment, showcasing practical implementation of modern web technologies.

---

## **Features**

### **Frontend Features**
- **Responsive UI**: Built using **React.js** and **Material-UI (MUI)** for a modern and intuitive interface.
- **Contact CRUD Operations**:
  - **Add Contact**: Create a new contact with essential details such as name, email, and phone.
  - **View Contact List**: Display all saved contacts in a structured and readable format.
  - **Update Contact**: Modify the details of an existing contact.
  - **Delete Contact**: Remove a contact from the system.
- **Interactive Form Validation**: Ensures that all required fields are properly validated before submission.
- **Aesthetic Theme**: Color scheme inspired by the hex code `#9694FF` for a visually appealing interface.

### **Backend Features**
- **API Development**:
  - RESTful APIs developed using **Node.js** and **Express.js**.
  - API endpoints handle CRUD operations for contacts.
- **Database Integration**:
  - **MongoDB** as the primary database, ensuring scalability and reliability.
  - Database named `erion` stores all contact information securely.
- **Error Handling**:
  - Handles API and UI errors gracefully with appropriate messages.

---

## **Technical Stack**

### **Frontend**
- **React.js**: Library for building dynamic, component-based UI.
- **Material-UI (MUI)**: Styling and responsive components.
- **Axios**: For HTTP requests to the backend.

### **Backend**
- **Node.js**: JavaScript runtime for server-side scripting.
- **Express.js**: Framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for efficient data storage and retrieval.

### **Other Tools**
- **Webpack**: Bundler for optimizing the React app.
- **npm**: Node Package Manager for dependency management.

---

## **What We Achieved**

This project demonstrates the following:
1. **Full-Stack Development**:
   - Seamless integration of frontend, backend, and database.
2. **CRUD Functionality**:
   - Users can create, read, update, and delete contact information.

---

## **Project Structure**

### **Frontend**

![image](https://github.com/user-attachments/assets/bb6d6c4b-e811-4c8b-b265-e90b5618b8b0)



### **Backend**

![image](https://github.com/user-attachments/assets/f7546cda-230a-4856-b556-aa3c8ca31386)



---

## **Installation**

### **Prerequisites**
Ensure you have the following installed on your system:
- Node.js (v16 or higher)
- npm (v7 or higher)
- MongoDB

# Steps to Install and Run the Application

# 1. Clone the Repository
git clone https://github.com/username/Erino-Assignment-Atharva-Awatade.git

cd Erino-Assignment-Atharva-Awatade

# 2. Install Dependencies
## Frontend:
cd frontend
npm install

## Backend:
cd ../backend
npm install

# 3. Set Up MongoDB
# Ensure MongoDB is running locally or provide a MongoDB connection string.
# Create a database named 'erion'.

# 4. Start the Application
## Backend:
cd backend
npm start

## Frontend:
cd ../frontend
npm start

# 5. Access the Application
# Open a browser and navigate to:
# http://localhost:3000
