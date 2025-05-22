import React, { useState } from 'react';
import '../styles/ClientModal.css';

const EditClientModal = ({ client, onClose, onSave }) => {
    const [editedClient, setEditedClient] = useState({
        name: client.name,
        rif: client.rif,
        description: client.description,
        accountNumber: client.accountNumber,
        phone: client.phone,
        address: client.address,
        contactPerson: client.contactPerson,
        email1: client.email1,
        email2: client.email2
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedClient(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        onSave(editedClient);
        onClose();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Editar Cliente</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <div className="info-row">
                    <label>Cliente:</label>
                    <input
                        type="text"
                        name="name"
                        value={editedClient.name}
                        onChange={handleChange}
                        className="edit-input"
                    />
                </div>
                <div className="info-row">
                    <label>RIF:</label>
                    <input
                        type="text"
                        name="rif"
                        value={editedClient.rif}
                        onChange={handleChange}
                        className="edit-input"
                    />
                </div>
                {/* Resto de campos editables */}
                <div className="info-row">
                    <label>Descripción:</label>
                    <input
                        type="text"
                        name="description"
                        value={editedClient.description}
                        onChange={handleChange}
                        className="edit-input"
                    />
                </div>
                <div className="info-row">
                    <label>Número de Cuenta:</label>
                    <input
                        type="text"
                        name="accountNumber"
                        value={editedClient.accountNumber}
                        onChange={handleChange}
                        className="edit-input"
                    />
                </div>
                <div className="info-row">
                    <label>Teléfono:</label>
                    <input
                        type="text"
                        name="phone"
                        value={editedClient.phone}
                        onChange={handleChange}
                        className="edit-input"
                    />
                </div>
                <div className="info-row">
                    <label>Dirección:</label>
                    <input
                        type="text"
                        name="address"
                        value={editedClient.address}
                        onChange={handleChange}
                        className="edit-input"
                    />
                </div>
                <div className="info-row">
                    <label>Persona Contacto:</label>
                    <input
                        type="text"
                        name="contactPerson"
                        value={editedClient.contactPerson}
                        onChange={handleChange}
                        className="edit-input"
                    />
                </div>
                <div className="info-row">
                    <label>Correo 1:</label>
                    <input
                        type="email"
                        name="email1"
                        value={editedClient.email1}
                        onChange={handleChange}
                        className="edit-input"
                    />
                </div>
                <div className="info-row">
                    <label>Correo 2:</label>
                    <input
                        type="email"
                        name="email2"
                        value={editedClient.email2}
                        onChange={handleChange}
                        className="edit-input"
                    />
                </div>
                <button className="save-button" onClick={handleSubmit}>
                    Guardar Cambios
                </button>
            </div>
        </div>
    );
};

export default EditClientModal;