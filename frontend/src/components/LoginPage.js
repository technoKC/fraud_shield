import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import './LoginPage.css';

const LoginPage = ({ showPage }) => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      localStorage.setItem('user', 'true');
      showPage('home');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">🔐 Sign in to FraudShield</h2>
        <button className="google-button" onClick={handleGoogleSignIn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" />
          Sign in with Google
        </button>
        <p className="login-footer">Secured by Firebase Authentication</p>
      </div>
    </div>
  );
};

export default LoginPage;
