import React, { useState } from 'react';
import '../styles/WorkerModal.css';

const AddWorkerModal = ({ isOpen, onClose, onSave }) => {
    const [newWorker, setNewWorker] = useState({
        name: '',
        cedula: '',
        phone: '',
        bank: '',
        email: '',
        amount: '',
        status: 'sin-pagar'
    });

    if (!isOpen) return null;

    const formatCedula = (value) => {
        const numbers = value.replace(/\D/g, '').slice(0, 8);
        const parts = [];
        for (let i = numbers.length; i > 0; i -= 3) {
            parts.unshift(numbers.slice(Math.max(0, i - 3), i));
        }
        return parts.join('.');
    };

    const formatAmount = (value) => {
        const numbers = value.replace(/[^\d.]/g, '');
        return numbers ? `${numbers}$` : '';
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const formatPhone = (value) => {
        const numbers = value.replace(/\D/g, '').slice(0, 12);
        if (!numbers) return '';
        
        let formatted = '+';
        if (numbers.length > 0) formatted += numbers.slice(0, 2);
        if (numbers.length > 2) formatted += ' ' + numbers.slice(2, 5);
        if (numbers.length > 5) formatted += '-' + numbers.slice(5, 12);
        
        return formatted;
    };

    const validatePhone = (phone) => {
        const cleanNumber = phone.replace(/[\s-]/g, '').slice(1); // Removemos el + del inicio
        return cleanNumber.length === 12; // 2 dígitos de código de área + 9 dígitos de número
    };

    const validateCedula = (cedula) => {
        const cleanCedula = cedula.replace(/\./g, '');
        return /^\d{7,8}$/.test(cleanCedula);
    };

    const resetForm = () => {
        setNewWorker({
            name: '',
            cedula: '',
            phone: '',
            bank: '',
            email: '',
            amount: '',
            status: 'sin-pagar'
        });
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSave = () => {
        let errors = [];
        
        if (!newWorker.name.trim()) errors.push("Nombre es requerido");
        if (!validateCedula(newWorker.cedula)) errors.push("Cédula inválida");
        if (!validatePhone(newWorker.phone)) errors.push("Teléfono inválido (debe incluir código de área)");
        if (!newWorker.bank) errors.push("Banco es requerido");
        if (!validateEmail(newWorker.email)) errors.push("Correo electrónico inválido");
        if (!newWorker.amount.replace(/[$]/g, '').trim()) errors.push("Monto es requerido");

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }

        onSave(newWorker);
        resetForm();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Agregar Nuevo Trabajador</h2>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Nombre Completo:</label>
                        <input
                            type="text"
                            value={newWorker.name}
                            onChange={(e) => setNewWorker({...newWorker, name: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cédula:</label>
                        <input
                            type="text"
                            value={newWorker.cedula}
                            onChange={(e) => {
                                const formattedValue = formatCedula(e.target.value);
                                setNewWorker({...newWorker, cedula: formattedValue});
                            }}
                            placeholder="Ingresar cédula"
                        />
                    </div>
                    <div className="form-group">
                        <label>Teléfono:</label>
                        <input
                            type="text"
                            value={newWorker.phone}
                            onChange={(e) => {
                                const formattedValue = formatPhone(e.target.value);
                                setNewWorker({...newWorker, phone: formattedValue});
                            }}
                            placeholder="+58 424-3079891"
                        />
                    </div>
                    <div className="form-group">
                        <label>Banco:</label>
                        <select
                            value={newWorker.bank}
                            onChange={(e) => setNewWorker({...newWorker, bank: e.target.value})}
                        >
                            <option value="">Seleccione un banco</option>
                            <option value="banesco">Banesco</option>
                            <option value="provincial">Provincial</option>
                            <option value="mercantil">Mercantil</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Correo:</label>
                        <input
                            type="email"
                            value={newWorker.email}
                            onChange={(e) => setNewWorker({...newWorker, email: e.target.value})}
                            placeholder="ejemplo@correo.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>Monto a Pagar:</label>
                        <input
                            type="text"
                            value={newWorker.amount}
                            onChange={(e) => {
                                const formattedValue = formatAmount(e.target.value);
                                setNewWorker({...newWorker, amount: formattedValue});
                            }}
                            placeholder="Ingrese el monto"
                        />
                    </div>
                    <div className="button-group">
                        <button className="save-button" onClick={handleSave}>
                            Guardar
                        </button>
                        <button className="cancel-button" onClick={handleClose}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddWorkerModal;