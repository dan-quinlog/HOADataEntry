import React from 'react';
import { signOut } from '@aws-amplify/auth';

function Nav() {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="bg-white shadow-lg p-4 mb-6">
      <div className="container mx-auto flex justify-center space-x-6">

        <a
          href="/data-entry"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Data Entry
        </a>
        <a
          href="/view-records"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          View Records
        </a>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
} export default Nav;


