---
description: Repository Information Overview
alwaysApply: true
---

# Mohalla Tuition Center (MTC) Information

## Summary
Mohalla Tuition Center (MTC) is a full-stack web application developed by The Quran Foundation for managing tuition centers. The application helps transform the lives of marginalized communities through education and empowerment. It includes user management for administrators, supervisors, tutors, and students, with features for attendance tracking, announcements, and center management.

## Structure
The repository is organized into two main components:
- **Frontend**: React-based web application with Vite
- **MTC_Backend**: Node.js/Express API server

## Projects

### Frontend
**Configuration File**: package.json, vite.config.js

#### Language & Runtime
**Language**: JavaScript (React)
**Version**: React 19.0.0
**Build System**: Vite 6.3.4
**Package Manager**: npm

#### Dependencies
**Main Dependencies**:
- React 19.0.0
- React Router DOM 7.5.2
- Ant Design 5.24.9
- Axios 1.9.0
- React Hook Form 7.58.1
- Tailwind CSS 3.4.17
- Framer Motion 12.9.2
- React Leaflet 5.0.0 (for maps)
- PWA capabilities via vite-plugin-pwa

#### Build & Installation
```bash
cd Frontend
npm install
npm run dev    # Development server
npm run build  # Production build
```

#### Features
- Progressive Web App (PWA) support
- Responsive design with Tailwind CSS
- Role-based authentication (Admin, Supervisor, Tutor, Guest)
- Interactive maps with React Leaflet
- Data export capabilities (CSV, PDF)

### MTC_Backend
**Configuration File**: package.json, ecosystem.config.js

#### Language & Runtime
**Language**: JavaScript (Node.js)
**Version**: Node.js with ES Modules
**Framework**: Express 4.21.2
**Package Manager**: npm

#### Dependencies
**Main Dependencies**:
- Express 4.21.2
- Mongoose 8.0.3
- JWT Authentication (jsonwebtoken 9.0.2)
- bcryptjs 2.4.3
- Cloudinary 2.6.0 (for image uploads)
- Nodemailer 7.0.3 (for email services)
- Multer 1.4.5 (for file uploads)

#### Build & Installation
```bash
cd MTC_Backend
npm install
npm run dev    # Development with nodemon
npm start      # Production start
```

#### API Routes
- `/api/admin`: Admin management
- `/api/supervisor`: Supervisor operations
- `/api/attendance`: Attendance tracking
- `/api/hadiya`: Hadiya management
- `/api/guest`: Guest user operations
- `/api/announcements`: Announcement system

#### Database
- MongoDB (MongoDB Atlas)
- Mongoose ODM for schema management
- Models include: Admin, Announcement, Attendance, Center, Student, Supervisor, Tutor

#### Deployment
The backend is configured for deployment using PM2 process manager with the ecosystem.config.js file, which includes environment variables for:
- MongoDB connection
- JWT authentication
- Email service
- CORS configuration

## Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control
- Protected routes on both frontend and backend

## Development Tools
- ESLint for code quality
- Nodemon for backend development
- Vite for frontend development with HMR
- Tailwind CSS for styling