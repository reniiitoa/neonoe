import React from 'react';
import '../styles/DeleteModal.css';

const DeleteModal = ({ onClose, onConfirm, clientName }) => {
    return (
        <div className="modal-backdrop">
            <div className="delete-modal">
                <h2>¿Estás seguro?</h2>
                <p>¿Deseas eliminar al cliente "{clientName}"?</p>
                <div className="delete-modal-buttons">
                    <button className="cancel-button" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="confirm-button" onClick={onConfirm}>
                        Sí, eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;