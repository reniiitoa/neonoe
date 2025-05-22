import React, { useState, useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import '../styles/Login.css';
import '../styles/LoadingSpinner.css';
import LoadingSpinner from './LoadingSpinner';

const Login = ({ onLogin }) => {
    const [userType, setUserType] = useState('client');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Activar el spinner
        const userData = {
            username,
            password,
            userType,
            ...(userType === 'admin' && { token })
        };
        // Simular el proceso de login
        setTimeout(() => {
            setLoading(false); // Desactivar el spinner
            onLogin(userData);
        }, 2000); // Ajusta el tiempo según sea necesario
    };

    const particlesOptions = {
        background: {
            color: {
                value: "#131456",
            },
        },
        fpsLimit: 30,
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 5, max: 5 },
            },
        },
        detectRetina: true,
    };

    return (
        <div className="login-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
            />
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="login-box">
                    <div className="logo">
                        <img src="/images/neo-logo2.png" alt="Neo Aplicaciones" />
                    </div>
                    <div className="login-content">
                        <div className="user-type-toggle">
                            <button 
                                className={userType === 'client' ? 'active' : ''} 
                                onClick={() => setUserType('client')}
                            >
                                Cliente
                            </button>
                            <button 
                                className={userType === 'admin' ? 'active' : ''} 
                                onClick={() => setUserType('admin')}
                            >
                                Admin
                            </button>
                        </div>
                        <div className="login-form-container">
                            <h1 className="login-title">Iniciar Sesión</h1>
                            <p className="login-subtitle">
                                ¡Bienvenido al Módulo de<br />
                                Cobranza de Neo Aplicaciones!
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <span className="input-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Usuario"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <span className="input-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </span>
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {userType === 'admin' && (
                                    <div className="input-group">
                                        <span className="input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                                                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Token de autenticación"
                                            value={token}
                                            onChange={(e) => setToken(e.target.value)}
                                        />
                                    </div>
                                )}
                                <button type="submit" className="login-button">
                                    Continuar
                                </button>
                            </form>
                            <div className="forgot-password">
                                <a href="#">¿Olvidaste tu Contraseña?</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;