import React, { useState } from 'react';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import AccountsReceivable from './components/AccountsReceivable';
import WorkersView from './components/WorkersView';
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const [currentView, setCurrentView] = useState('dashboard');

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleNavigation = (view) => {
        setCurrentView(view);
    };

    if (!user) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className="App">
            {currentView === 'dashboard' && (
                <AdminDashboard 
                    onNavigate={handleNavigation}
                    currentView={currentView}
                />
            )}
            {currentView === 'accounts' && (
                <AccountsReceivable 
                    onNavigate={handleNavigation}
                    currentView={currentView}
                />
            )}
            {currentView === 'workers' && (
                <WorkersView 
                    onNavigate={handleNavigation}
                    currentView={currentView}
                />
            )}
        </div>
    );
}

export default App;
