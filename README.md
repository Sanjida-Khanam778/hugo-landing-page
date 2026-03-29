# Hugo - University Management Platform

## Overview

Hugo is a comprehensive web platform designed to connect students, universities, and administrators in a seamless ecosystem. Built with modern web technologies, Hugo provides a centralized hub for university information, program exploration, career opportunities, and community engagement. The platform features role-based access for users, universities, and administrators, enabling efficient management and interaction across the education landscape.

## Features

### 🔐 Authentication & User Management

- Multi-role authentication (Students, Universities, Administrators)
- Secure login/signup with email verification
- Password reset and OTP verification
- Role-based access control and private routing

### 🏛️ University Directory

- Comprehensive university profiles with detailed information
- Program listings and detailed program pages
- University events and announcements
- Photo galleries showcasing campus life
- Student testimonials and reviews
- Job and internship postings by universities

### 👤 User Dashboard

- Personalized dashboard for students
- Application tracking and management
- Saved universities and programs
- Profile management and settings

### 🏢 University Dashboard

- Complete university profile management
- Program creation and management
- Event scheduling and management
- Job posting capabilities
- Student application reviews and approvals
- Gallery management
- Analytics and insights

### 👨‍💼 Admin Dashboard

- System-wide university management
- User and university account oversight
- Content moderation and approval workflows
- Platform analytics and reporting

### 🤖 AI Assistant

- Integrated AI-powered assistant for user support
- Intelligent chat functionality
- Voice recognition capabilities
- Contextual help and guidance

### 💬 Communication Features

- Real-time chat system
- Newsletter subscription and management
- Notification system

### 📊 Data Visualization

- Interactive charts and analytics
- University comparison tools
- Program statistics and insights

### 🎨 Modern UI/UX

- Responsive design for all devices
- Dark/light theme support
- Rich text editing capabilities
- Smooth animations and transitions

## Technologies Used

### Frontend Framework

- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server

### State Management

- **Redux Toolkit** - State management with RTK Query
- **React Redux** - Official React bindings for Redux
- **Redux Persist** - State persistence across sessions

### Routing & Navigation

- **React Router DOM** - Declarative routing for React

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

### Backend & Database

- **Firebase** - Backend-as-a-Service for authentication, database, and hosting

### Rich Text Editing

- **CKEditor 5** - Rich text editor for content creation
- **React Markdown** - Markdown rendering in React

### UI Components & Icons

- **React Icons** - Popular icon library
- **Lucide React** - Beautiful & consistent icon toolkit
- **Lottie React** - Animation library for web

### Additional Libraries

- **React Hot Toast** - Toast notifications
- **React Speech Recognition** - Speech-to-text functionality
- **Recharts** - Composable charting library
- **LocalForage** - Improved storage layer
- **Match Sorter** - Simple, expected, and deterministic best-match sorting

### Development Tools

- **ESLint** - JavaScript linting utility
- **TypeScript** - Type definitions for React

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hugo-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Set up Firebase configuration:
   - Create a Firebase project
   - Add your Firebase config to `src/firebase/firebase.config.js`

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── Api/                 # API service functions
├── assets/              # Static assets (icons, images, videos)
├── components/          # Reusable UI components
├── features/            # Redux slices and state management
├── firebase/            # Firebase configuration
├── Layouts/             # Page layouts for different user roles
├── Pages/               # Main application pages
├── Provider/            # Context providers
├── Routers/             # Routing configuration
└── Stores/              # Redux store configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support or questions, please contact the development team.
