import React from "react";

export default function UniSignUp() {
    const [signupForm, setSignupForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    department: '',
    password: '',
    confirmPassword: ''
  });
 const handleSignupChange = (e) => {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

   const validateSignup = () => {
    const newErrors = {};
    
    if (!signupForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(signupForm.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!signupForm.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!signupForm.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!signupForm.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!signupForm.department.trim()) newErrors.department = 'Department is required';
    
    if (!signupForm.password) {
      newErrors.password = 'Password is required';
    } else if (signupForm.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (signupForm.password !== signupForm.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (validateSignup()) {
      const newUser = {
        email: signupForm.email,
        password: signupForm.password,
        firstName: signupForm.firstName,
        lastName: signupForm.lastName,
        jobTitle: signupForm.jobTitle,
        department: signupForm.department
      };
      
      setUsers([...users, newUser]);
      alert('Account created successfully! Please sign in.');
      setCurrentPage('signin');
      setSignupForm({
        email: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        department: '',
        password: '',
        confirmPassword: ''
      });
    }
  };
  
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <h1 className="text-4xl font-bold text-white text-center mb-2">
        Sign Up
      </h1>
      <p className="text-blue-100 text-center mb-8">
        Create your account to request admin access
      </p>

      <div>
        <h2 className="text-white text-lg font-semibold mb-4">
          Identity & Contact Information
        </h2>

        <div className="mb-4">
          <label className="block text-white text-sm mb-2">
            Official University Email *
          </label>
          <input
            type="email"
            name="email"
            value={signupForm.email}
            onChange={handleSignupChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-300 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white text-sm mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={signupForm.firstName}
              onChange={handleSignupChange}
              className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-300 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-white text-sm mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={signupForm.lastName}
              onChange={handleSignupChange}
              className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="text-red-300 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm mb-2">
            Job Title/Designation *
          </label>
          <input
            type="text"
            name="jobTitle"
            value={signupForm.jobTitle}
            onChange={handleSignupChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
            placeholder="e.g., Program Coordinator, HR Specialist"
          />
          {errors.jobTitle && (
            <p className="text-red-300 text-sm mt-1">{errors.jobTitle}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm mb-2">
            Department/Office *
          </label>
          <input
            type="text"
            name="department"
            value={signupForm.department}
            onChange={handleSignupChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
            placeholder="e.g., Admissions, Faculty of Science"
          />
          {errors.department && (
            <p className="text-red-300 text-sm mt-1">{errors.department}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm mb-2">
            Create Password *
          </label>
          <input
            type="password"
            name="password"
            value={signupForm.password}
            onChange={handleSignupChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
            placeholder="••••••••••"
          />
          {errors.password && (
            <p className="text-red-300 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-white text-sm mb-2">
            Confirm Password *
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={signupForm.confirmPassword}
            onChange={handleSignupChange}
            className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
            placeholder="••••••••••"
          />
          {errors.confirmPassword && (
            <p className="text-red-300 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 mb-4"
        >
          Sign Up
        </button>

        <p className="text-center text-blue-100">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => setCurrentPage("signin")}
            className="text-blue-300 hover:text-blue-200 underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
