import React, { useState } from 'react';
import '../styles/ClientModal.css';

const AddClientModal = ({ onClose, onSave }) => {
    const [newClient, setNewClient] = useState({
        name: '',
        rif: '',
        description: '',
        accountNumber: '',
        phone: '',
        address: '',
        contactPerson: '',
        email1: '',
        email2: '',
        status: 'al-dia' // Valor por defecto
    });

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <div className="info-row">
                        <label>Cliente:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={newClient.name}
                            onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Rif:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={newClient.rif}
                            onChange={(e) => setNewClient({...newClient, rif: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Descripción:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={newClient.description}
                            onChange={(e) => setNewClient({...newClient, description: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Número de Cuenta:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={newClient.accountNumber}
                            onChange={(e) => setNewClient({...newClient, accountNumber: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Teléfono:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={newClient.phone}
                            onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Dirección:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={newClient.address}
                            onChange={(e) => setNewClient({...newClient, address: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Persona Contacto:</label>
                        <input
                            className="edit-input"
                            type="text"
                            value={newClient.contactPerson}
                            onChange={(e) => setNewClient({...newClient, contactPerson: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Correo 1:</label>
                        <input
                            className="edit-input"
                            type="email"
                            value={newClient.email1}
                            onChange={(e) => setNewClient({...newClient, email1: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Correo 2:</label>
                        <input
                            className="edit-input"
                            type="email"
                            value={newClient.email2}
                            onChange={(e) => setNewClient({...newClient, email2: e.target.value})}
                        />
                    </div>
                    <div className="info-row">
                        <label>Status:</label>
                        <select
                            className="edit-input"
                            value={newClient.status}
                            onChange={(e) => setNewClient({...newClient, status: e.target.value})}
                        >
                            <option value="al-dia">Al día</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="sin-pagar">Sin pagar</option>
                        </select>
                    </div>

                </div>
                <button 
                    className="save-button"
                    onClick={() => onSave(newClient)}
                >
                    Guardar
                </button>
            </div>
        </div>
    );
};

export default AddClientModal;