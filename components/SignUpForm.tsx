import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SignupForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic here
    console.log('Signup submitted', { fullName, email, password });
    // Redirect to dashboard or login page after successful signup
    // router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-purple-900 flex items-center justify-center p-4">
      <div className="bg-purple-950 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-3xl font-bold text-white">Welcome</h1>
        </div>
        <p className="text-cyan-300 mb-6">Please input your details so you can create an account</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-cyan-300 mb-1">Full Name</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 rounded bg-purple-900 text-white border border-cyan-300 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-cyan-300 mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-purple-900 text-white border border-cyan-300 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-cyan-300 mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-purple-900 text-white border border-cyan-300 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-cyan-300 mb-1">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 rounded bg-purple-900 text-white border border-cyan-300 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Register
            </button>
            <button type="button" onClick={() => router.push('/login')} className="bg-transparent text-white px-4 py-2 rounded border border-white hover:bg-white hover:text-purple-900 transition duration-300">
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 flex justify-between text-cyan-300">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;