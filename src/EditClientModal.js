import React, { useState } from 'react';
import '../styles/ClientModal.css';

const EditClientModal = ({ isOpen, onClose, client, onSave }) => {
    const [editedClient, setEditedClient] = useState(client);

    if (!isOpen) return null;

    const handleInputChange = (field, value) => {
        setEditedClient(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <form onSubmit={handleSubmit}>
                    <div className="info-row">
                        <label>Cliente:</label>
                        <input
                            type="text"
                            value={editedClient.nombre}
                            onChange={(e) => handleInputChange('nombre', e.target.value)}
                            className="editable-input"
                        />
                    </div>
                    <div className="info-row">
                        <label>Teléfono:</label>
                        <input
                            type="text"
                            value={editedClient.telefono}
                            onChange={(e) => handleInputChange('telefono', e.target.value)}
                            className="editable-input"
                        />
                    </div>
                    <div className="info-row">
                        <label>Dirección:</label>
                        <input
                            type="text"
                            value={editedClient.direccion}
                            onChange={(e) => handleInputChange('direccion', e.target.value)}
                            className="editable-input"
                        />
                    </div>
                    <div className="info-row">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={editedClient.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="editable-input"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="save-button">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditClientModal;