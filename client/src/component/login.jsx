import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        {isLogin ? <LoginForm /> : <SignupForm />}

        <div className="text-center mt-4">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={toggleForm}
              className="text-blue-500 hover:underline font-medium"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter your email"
      />
    </div>
    <div>
      <label className="block text-gray-700">Password</label>
      <input
        type="password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter your password"
      />
    </div>
    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
      Login
    </button>
  </form>
);

const SignupForm = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700">Username</label>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Choose a username"
      />
    </div>
    <div>
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter your email"
      />
    </div>
    <div>
      <label className="block text-gray-700">Password</label>
      <input
        type="password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Create a password"
      />
    </div>
    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
      Sign Up
    </button>
  </form>
);

export default AuthForm;
