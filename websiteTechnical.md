
---

# **Project Name: Kyvingus University**

## **Website Technical Documentation**

---

### **Introduction**
This document serves as a technical guide for Kyvingus. It outlines the technical stack, setup procedures, and custom code details to provide a comprehensive understanding of the website's backend and frontend functionalities.



### Technical Stack
- **Frontend**: Next.js/React
- **Backend**: Firebase Firestore, Firebase Authentication
- **Hosting**: Vercel Hosting
- **Version Control**: Git and GitHub
- **Additional Libraries**: Next.js for server-side rendering and routing

### Environment Setup
1. **Node.js**: Ensure Node.js is installed on your system.
2. **Firebase Account**: Create a Firebase project in the Firebase console.
3. **Local Development**:
   - Clone the repository: `git clone https://github.com/AshleeSanjay/ITC502-uniservices.git`
   - Install dependencies: `npm install`
   - Start the development server: `npm run dev`

### **Database Structure**
- **Collections**: bookings
- **Documents**: Each booking is a document with fields such as date, time, bookingType, etc.

---

### **Authentication**

The website features a secure user authentication system built with Firebase. Below is the code for the `LoginPage` component, which handles user sign-in functionality:

This component utilizes React hooks for state management and the Next.js `useRouter` hook for navigation. The `signInWithEmailAndPassword` function from Firebase's authentication library is used to authenticate users. Upon successful login, users are redirected to the `/services` page. Error handling is also included to provide feedback on failed login attempts.

---

### **Custom JavaScript Functions**
- `fetchBookings`: Retrieves user-specific bookings from Firestore.
- `handleDeleteBooking`: Deletes a user's booking from Firestore.
- `getNextBooking`: Determines the next upcoming booking for the user.
- `handleSignIn`: This asynchronous function is triggered when the user submits the login form. It attempts to sign the user in using their email and password. If successful, it redirects the user to the services page. In case of an error, it sets an error message to be displayed.

### **CSS Customizations**
- Tailwind CSS for styling.
- Custom classes for responsive design and theming.

### **Security**
- Firebase security rules to protect user data.
- HTTPS enforced for all connections.

### **Technical Challenges**
- Implementing custom authentication flows.
- Real-time data synchronization across user sessions.

### **Testing**
- Manual testing conducted for all features.
- Automated testing setup using Jest for React components.

---






