import React, { useState } from 'react';
import '../styles/AdminDashboard.css';
import Sidebar from './Sidebar';
import SearchAndFilter from './SearchAndFilter';
import Header from './Header'; // Import the Header component

const AccountsReceivable = ({ onNavigate, currentView }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('todos');
    const [selectedClient, setSelectedClient] = useState(null);

    // Usar los mismos clientes del localStorage
    const [clients, setClients] = useState(() => {
        const savedClients = localStorage.getItem('clients');
        return savedClients ? JSON.parse(savedClients) : [];
    });

    const filteredClients = clients.filter(client => {
        const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'todos' || client.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    if (selectedClient) {
        return (
            <div className="dashboard-container">
                <Sidebar onNavigate={onNavigate} currentView={currentView} />
                <main className="main-content" style={{ overflowY: 'auto', maxHeight: '100vh', paddingBottom: '20px' }}>
                    {/* Use the Header component */}
                    <Header title="Detalles de Cuenta" />
                    <div className="content-header">
                        <div className="header-left">
                            <button className="back-button" onClick={() => setSelectedClient(null)}>
                                ‹ Volver
                            </button>
                            <h1>Detalles de Cuenta</h1>
                        </div>
                        <button className="add-account-button">
                            Agregar Cuenta por Cobrar
                        </button>
                    </div>
                    <div className="content-body">
                        <div className="clients-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Correo</th>
                                        <th>Fecha Límite</th>
                                        <th>Status</th>
                                        <th>Debe</th>
                                        <th>Notificación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{selectedClient.name}</td>
                                        <td>{selectedClient.email1}</td>
                                        <td>{selectedClient.fechaLimite || '15/12/2023'}</td>
                                        <td>
                                            <span className={`status ${selectedClient.status}`}>
                                                {selectedClient.status === 'al-dia' ? 'Al día' : 
                                                 selectedClient.status === 'pendiente' ? 'Pendiente' : 'Sin pagar'}
                                            </span>
                                        </td>
                                        <td>{selectedClient.debe || '0'} Bs.</td>
                                        <td>
                                            <span className="notification-status">
                                                ✓
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <Sidebar onNavigate={onNavigate} currentView={currentView} />
            <main className="main-content" style={{ overflowY: 'auto', maxHeight: '100vh', paddingBottom: '20px' }}>
                {/* Use the Header component */}
                <Header title="Cuentas por Cobrar" />
                <div className="search-section">
                    <SearchAndFilter
                        searchTerm={searchTerm}
                        onSearch={handleSearch}
                        statusFilter={statusFilter}
                        onStatusFilterChange={(e) => setStatusFilter(e.target.value)}
                    />
                    <button className="add-client-button">
                        Agregar Cuenta por Cobrar
                    </button>
                </div>
                <div className="clients-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Correo 1</th>
                                <th>Teléfono</th>
                                <th>Status</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map((client, index) => (
                                <tr key={index}>
                                    <td>{client.name}</td>
                                    <td>{client.email1}</td>
                                    <td>{client.phone}</td>
                                    <td>
                                        <span className={`status ${client.status}`}>
                                            {client.status === 'al-dia' ? 'Al día' : 
                                             client.status === 'pendiente' ? 'Pendiente' : 'Sin pagar'}
                                        </span>
                                    </td>
                                    <td>
                                        <button 
                                            className="manage-btn"
                                            onClick={() => setSelectedClient(client)}
                                        >
                                            Gestionar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AccountsReceivable;