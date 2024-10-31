import React from 'react';
import { signInWithRedirect } from '@aws-amplify/auth';

function Login() {
  const handleLogin = () => {
    signInWithRedirect();
  };

  return (
    <button 
      onClick={handleLogin}
      className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
    >
      Login to Property Management
    </button>
  );
}

export default Login;
