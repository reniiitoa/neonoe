import React, { useState } from 'react';
import '../styles/AdminPanel.css';
import EditClientModal from './EditClientModal';

const AdminPanel = () => {
    const [selectedClient, setSelectedClient] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleEditClick = (client) => {
        setSelectedClient(client);
        setShowEditModal(true);
    };

    const handleSaveEdit = (editedClient) => {
        // Here you would typically update the client data in your backend
        console.log('Saving edited client:', editedClient);
    };

    // Actualiza la estructura de los datos de ejemplo
    const clients = [
        {
            id: 1,
            name: 'Cliente Ejemplo',
            email1: 'ejemplo@email.com',
            email2: 'ejemplo2@email.com',
            phone: '123-456-7890',
            status: 'Al día'
        }
    ];

    return (
        <div className="admin-panel">
            <header className="admin-header">
                <h1>Panel de Administración</h1>
            </header>
            <div className="admin-content">
                <h2>Módulo de Cobranza</h2>
                <div className="client-list">
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
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td>{client.name}</td>
                                    <td>{client.email1}</td>
                                    <td>{client.email2}</td>
                                    <td>{client.phone}</td>
                                    <td>{client.status}</td>
                                    <td>
                                        <button
                                            onClick={() => handleEditClick(client)}
                                            className="edit-button"
                                            style={{ cursor: 'pointer', background: 'none', border: 'none' }}
                                        >
                                            ✏️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <EditClientModal
                isOpen={showEditModal}
                onClose={() => setShowEditModal(false)}
                client={selectedClient}
                onSave={handleSaveEdit}
            />
        </div>
    );
};

export default AdminPanel;