import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Adjust the path as needed

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card p-4 shadow text-center" style={{ maxWidth: '400px', width: '100%' }}>
                <img
                    src={logo}
                    alt="Logo"
                    className="mx-auto d-block"
                    style={{ width: '250px', height: '100px', marginTop: '0.1rem', marginBottom: '0.1rem', objectFit: 'contain' }}
                />
                <h3 className="mb-3">Login</h3>

                <form onSubmit={handleSubmit} className="text-start">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
