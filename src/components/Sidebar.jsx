import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onNavigate, currentView, onLogout }) => {
    const [isCollapsed, setIsCollapsed] = useState(() => {
        const saved = localStorage.getItem('sidebarState');
        return saved ? JSON.parse(saved) : false;
    });

    const toggleSidebar = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem('sidebarState', JSON.stringify(newState));
    };

    useEffect(() => {
        const saved = localStorage.getItem('sidebarState');
        if (saved !== null) {
            setIsCollapsed(JSON.parse(saved));
        }
    }, []);

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                <img src="/images/Menu.png" alt="Toggle menu" />
            </button>
            <div className="logo">
                <img src="/images/neo-logo.png" alt="Neo Logo" className="logo-expanded" />
                <img src="/images/n.png" alt="N Logo" className="logo-collapsed" />
            </div>
            <nav className="nav-menu">
                <button 
                    className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
                    onClick={() => onNavigate('dashboard')}
                >
                    <img src="/images/user-list-icon.png" alt="" className="nav-icon" />
                    <span className="nav-text">Listado de Cliente</span>
                </button>
                <button 
                    className={`nav-item ${currentView === 'accounts' ? 'active' : ''}`}
                    onClick={() => onNavigate('accounts')}
                >
                    <img src="/images/accounts-icon.png" alt="" className="nav-icon" />
                    <span className="nav-text">Cuentas por cobrar</span>
                </button>
                <button 
                    className={`nav-item ${currentView === 'workers' ? 'active' : ''}`}
                    onClick={() => onNavigate('workers')}
                >
                    <img src="/images/workers-icon.png" alt="" className="nav-icon" />
                    <span className="nav-text">Trabajadores</span>
                </button>
            </nav>
            <div className="sidebar-footer">
                <img 
                    src="/images/hand-icon.png" 
                    alt="Hand Icon" 
                    className="hand-icon-expanded" 
                />
                <img 
                    src="/images/hand-icon2.png" 
                    alt="Hand Icon Small" 
                    className="hand-icon-collapsed" 
                />
                <button 
                    className="logout-button" 
                    onClick={onLogout}
                >
                    Cerrar sesión
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;