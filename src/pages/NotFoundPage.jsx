import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="text-deep-teal hover:text-soft-teal">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;