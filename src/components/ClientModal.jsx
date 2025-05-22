import React from 'react';
import '../styles/ClientModal.css';

const ClientModal = ({ client, onClose }) => {
    if (!client) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Inspeccionar</h2>
                    <button className="close-button" onClick={onClose}>✕</button>
                </div>
                <div className="modal-body">
                    <div className="client-info">
                        <div className="info-row">
                            <label>Cliente:</label>
                            <span>{client.name}</span>
                        </div>
                        <div className="info-row">
                            <label>RIF:</label>
                            <span>{client.rif || '02220220220'}</span>
                        </div>
                        <div className="info-row">
                            <label>Descripción:</label>
                            <span>{client.description || 'Cliente de Casa Italia'}</span>
                        </div>
                        <div className="info-row">
                            <label>Número de Cuenta:</label>
                            <span>{client.accountNumber || '01234567890'}</span>
                        </div>
                        <div className="info-row">
                            <label>Teléfono:</label>
                            <span>{client.phone}</span>
                        </div>
                        <div className="info-row">
                            <label>Dirección:</label>
                            <span>{client.address || 'Calle'}</span>
                        </div>
                        <div className="info-row">
                            <label>Persona Contacto:</label>
                            <span>{client.contactPerson || '04124562526'}</span>
                        </div>
                        <div className="info-row">
                            <label>Correo 1:</label>
                            <span>{client.email1}</span>
                        </div>
                        <div className="info-row">
                            <label>Correo 2:</label>
                            <span>{client.email2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientModal;