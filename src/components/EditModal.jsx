import React, { useState, useEffect } from 'react';
import '../styles/ClientModal.css';

const EditModal = ({ client, onClose, onSave }) => {
    const [editedClient, setEditedClient] = useState({
        name: '',
        rif: '',
        description: '',
        accountNumber: '',
        phone: '',
        address: '',
        contactPerson: '',
        email1: '',
        email2: ''
    });

    useEffect(() => {
        if (client) {
            setEditedClient({
                name: client.name || '',
                rif: client.rif || '',
                description: client.description || '',
                accountNumber: client.accountNumber || '',
                phone: client.phone || '',
                address: client.address || '',
                contactPerson: client.contactPerson || '',
                email1: client.email1 || '',
                email2: client.email2 || ''
            });
        }
    }, [client]);

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Editar Información</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <div className="info-row">
                        <label>Cliente:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={editedClient.name}
                            onChange={(e) => setEditedClient({...editedClient, name: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Rif:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={editedClient.rif}
                            onChange={(e) => setEditedClient({...editedClient, rif: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Descripción:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={editedClient.description}
                            onChange={(e) => setEditedClient({...editedClient, description: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Número de Cuenta:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={editedClient.accountNumber}
                            onChange={(e) => setEditedClient({...editedClient, accountNumber: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Teléfono:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={editedClient.phone}
                            onChange={(e) => setEditedClient({...editedClient, phone: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Dirección:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={editedClient.address}
                            onChange={(e) => setEditedClient({...editedClient, address: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Persona Contacto:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={editedClient.contactPerson}
                            onChange={(e) => setEditedClient({...editedClient, contactPerson: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Correo 1:</label>
                        <input
                            className="edit-input"
                            type="email"
                            value={editedClient.email1}
                            onChange={(e) => setEditedClient({...editedClient, email1: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Correo 2:</label>
                        <input
                            className="edit-input"
                            type="email"
                            value={editedClient.email2}
                            onChange={(e) => setEditedClient({...editedClient, email2: e.target.value})}
                        />
                    </div>
                </div>
                <button 
                    className="save-button"
                    onClick={() => onSave(editedClient)}
                >
                    Guardar
                </button>
            </div>
        </div>
    );
};

export default EditModal;