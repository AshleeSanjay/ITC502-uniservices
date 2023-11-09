
--- 

# 📚 **Kyvingus University Booking System** 📚

Welcome to the Kyvingus University Booking System! 
This cutting edge application allows users to book various services such as vehicles, rooms, or counselors, and introduces our proud team members.


# 📂 **App Structure** 📂
---
```python
.
├── README.md                             # Project documentation
│
├── app                                   # Main application pages
│   │
│   ├── about
│   │   └── page.tsx                      # About page
│   │
│   ├── booking
│   │   └── page.tsx                      # Booking page
│   │
│   ├── contact
│   │   └── page.tsx                      # Contact page for user inquiries
│   │
│   ├── login
│   │   └── page.tsx                      # User login page
│   │
│   └── services
│       └── page.tsx                      # Services showcase page
│
├── components                            # Reusable components
│   │
│   ├── About
│   │   ├── AboutFeatures.tsx             # Features of the university
│   │   └── TheTeam.tsx                   # Introduction to team members
│   │
│   ├── Forms
│   │   ├── BookingForm.tsx               # Booking services form
│   │   ├── ContactForm.tsx               # User contact form
│   │   └── LoginPage.tsx                 # User login form
│   │
│   └── Layout
│       ├── Footer.tsx                    # Footer component
│       └── Navigation.tsx                # Navigation component
│
├── config
│   └── firebase.js                       # Firebase configuration
│
├── utils                                 # Utility funcs and components
│   ├── AuthCheck2.tsx                    # User auth check component
│   └── withAuth.tsx                      # Auth higher-order component
│
└── public                                # Static assets
    ├── University.png                    # University logo
    ├── services.jpg                      # Services image
    └── ...                               # Other static assets
```

---
## 📄 **Pages** 📄

1. **Booking**: Allows users to book services. Users can choose from vehicles, rooms, or counselors.

2. **Contact**: A page where users can get in touch with the university or support.

3. **Login**: Allows users to authenticate themselves to access certain parts of the application.

4. **Services**: Introduces the services offered by the university.

5. **About**: Provides information about the university and introduces the team members.

---

## 🧩 **Components** 🧩

1. **BookingForm**: A reusable component for the booking functionality.

2. **AuthCheck**: Ensures that only authenticated users can access certain parts of the application.
3. **ServicesSection**: Displays the services offered by the university.
4. **TeamSection**: Introduces the team members.
---
## 🔧 **Configs & Utilities** 🔧

1. **Firebase**: Contains configurations and utilities for integrating with Firebase for both data storage (Firestore) and authentication.
2. **Auth**: Utilities to handle user authentication, including checking the user's authentication status and redirecting unauthenticated users.
---
## 📌 **Key Features** 📌

1. **Dynamic UI**: The booking form dynamically updates the options dropdown based on the selected booking type.
2. **Firebase Integration**: The app integrates with Firebase for both data storage and authentication.
3. **Authentication**: Only authenticated users can access certain parts of the application, ensuring data privacy and security.
4. **Team Introduction**: Users can meet the team behind the university's success.
---

# 📌 **Recommendations** 📌

1. **Error Handling**: Consider adding more comprehensive error handling, especially for Firebase operations.
2. **Form Validation**: Implement form validation to ensure users provide valid data before submission.
3. **Styling**: Ensure consistent styling across pages and components for a cohesive user experience.
---