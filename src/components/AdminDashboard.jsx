import React, { useState } from 'react';
import '../styles/AdminDashboard.css';
import ClientModal from './ClientModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import AddClientModal from './AddClientModal';
import Sidebar from './Sidebar';
import SearchAndFilter from './SearchAndFilter';
import Header from './Header';

const AdminDashboard = ({ onNavigate, currentView }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('todos');
    const [selectedClient, setSelectedClient] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [clientToEdit, setClientToEdit] = useState(null);
    const [clients, setClients] = useState(() => {
        const savedClients = localStorage.getItem('clients');
        return savedClients ? JSON.parse(savedClients) : [
            {
                name: 'Reni',
                email1: 'jane@microsoft.com',
                email2: 'floyd@yahoo.com',
                phone: '+58 4162356897',
                status: 'al-dia'
            },
            {
                name: 'santiago',
                email1: 'jane@microsoft.com',
                email2: 'floyd@yahoo.com',
                phone: '+58 4162356897',
                status: 'pendiente'
            },
            {
                name: 'estefania',
                email1: 'jane@microsoft.com',
                email2: 'floyd@yahoo.com',
                phone: '+58 4162356897',
                status: 'sin-pagar'
            }
        ];
    });

    const filteredClients = clients.filter(client => {
        const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'todos' || client.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    const handleEditClick = (client) => {
        setClientToEdit(client);
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = (editedClient) => {
        const originalClient = clients.find(c => c.name === clientToEdit.name);
        const updatedClient = {
            ...editedClient,
            status: originalClient.status
        };
        
        const updatedClients = clients.map(client => 
            client.name === clientToEdit.name ? updatedClient : client
        );
        
        localStorage.setItem('clients', JSON.stringify(updatedClients));
        setClients(updatedClients);
        setIsEditModalOpen(false);
        
        if (selectedClient && selectedClient.name === clientToEdit.name) {
            setSelectedClient(updatedClient);
        }
    };

    const [clientToDelete, setClientToDelete] = useState(null);

    const handleDeleteClick = (client) => {
        setClientToDelete(client);
    };

    const handleConfirmDelete = () => {
        const updatedClients = clients.filter(client => client.name !== clientToDelete.name);
        localStorage.setItem('clients', JSON.stringify(updatedClients));
        setClients(updatedClients);
        setClientToDelete(null);
        
        if (selectedClient && selectedClient.name === clientToDelete.name) {
            setSelectedClient(null);
        }
    };

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleSaveNewClient = (newClient) => {
        const updatedClients = [...clients, newClient];
        localStorage.setItem('clients', JSON.stringify(updatedClients));
        setClients(updatedClients);
        setIsAddModalOpen(false);
    };

    return (
        <div className="dashboard-container">
            {isAddModalOpen && (
                <AddClientModal
                    onClose={() => setIsAddModalOpen(false)}
                    onSave={handleSaveNewClient}
                />
            )}

            {selectedClient && (
                <ClientModal 
                    client={selectedClient} 
                    onClose={() => setSelectedClient(null)} 
                />
            )}
    
            {isEditModalOpen && (
                <EditModal
                    client={clientToEdit}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={handleSaveEdit}
                />
            )}
    
            {clientToDelete && (
                <DeleteModal
                    clientName={clientToDelete.name}
                    onClose={() => setClientToDelete(null)}
                    onConfirm={handleConfirmDelete}
                />
            )}
            <Sidebar onNavigate={onNavigate} currentView={currentView} />
            <main className="main-content">
                <Header title="Listado de Cliente" />
                <div className="search-section">
                    <SearchAndFilter 
                        searchTerm={searchTerm}
                        onSearch={handleSearch}
                        statusFilter={statusFilter}
                        onStatusFilterChange={(e) => setStatusFilter(e.target.value)}
                    />
                    <button 
                        className="add-client-button"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        Agregar Cliente
                    </button>
                </div>
                <div className="clients-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Correo 1</th>
                                <th>Correo 2</th>
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
                                    <td>{client.email2}</td>
                                    <td>{client.phone}</td>
                                    <td><span className={`status ${client.status}`}>
                                        {client.status === 'al-dia' ? 'Al día' : 
                                         client.status === 'pendiente' ? 'Pendiente' : 'Sin pagar'}
                                    </span></td>
                                    <td className="actions">
                                        <button className="action-btn" onClick={() => setSelectedClient(client)}>👁️</button>
                                        <button className="action-btn" onClick={() => handleEditClick(client)}>✏️</button>
                                        <button className="action-btn" onClick={() => handleDeleteClick(client)}>🗑️</button>
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

export default AdminDashboard;