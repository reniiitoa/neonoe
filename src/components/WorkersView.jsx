import React, { useState } from 'react';
import '../styles/AdminDashboard.css';
import Sidebar from './Sidebar';
import SearchAndFilter from './SearchAndFilter';
import AddWorkerModal from './AddWorkerModal';

const WorkersView = ({ onNavigate, currentView }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('todos');
    const [showAddModal, setShowAddModal] = useState(false);
    const [workers, setWorkers] = useState([
        {
            name: 'Renny Molina',
            email1: 'jane@microsoft.com',
            bank: 'Banesco',
            phone: '+58 4162356897',
            amount: '1000$',
            status: 'pagado'
        }
    ]);

    const filteredWorkers = workers.filter(worker => {
        const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'todos' || worker.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleSaveWorker = (newWorker) => {
        if (!newWorker.name || !newWorker.email || !newWorker.bank || 
            !newWorker.phone || !newWorker.cedula || !newWorker.amount) {
            alert('Por favor, complete todos los campos');
            return;
        }

        setWorkers([...workers, {
            name: newWorker.name,
            email1: newWorker.email,
            bank: newWorker.bank,
            phone: newWorker.phone,
            cedula: newWorker.cedula,
            amount: newWorker.amount,
            status: 'sin pagar'
        }]);
        setShowAddModal(false);
    };

    return (
        <div className="dashboard-container">
            <Sidebar onNavigate={onNavigate} currentView={currentView} />
            <main className="main-content">
                {/* Add the upper title bar */}
                <div className="header-container">
                    <h1 className="header-title">Trabajadores</h1>
                </div>
                
                <div className="search-section">
                    <SearchAndFilter
                        searchTerm={searchTerm}
                        onSearch={(e) => setSearchTerm(e.target.value)}
                        statusFilter={statusFilter}
                        onStatusFilterChange={(e) => setStatusFilter(e.target.value)}
                    />
                    <button 
                        className="add-client-button"
                        onClick={() => setShowAddModal(true)}
                    >
                        Agregar Trabajador
                    </button>
                </div>
                <div className="clients-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Trabajadores</th>
                                <th>Correo</th>
                                <th>Banco</th>
                                <th>Teléfono</th>
                                <th>Monto</th>
                                <th>Status</th>
                                <th>Pagar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredWorkers.map((worker, index) => (
                                <tr key={index}>
                                    <td>{worker.name}</td>
                                    <td>{worker.email1}</td>
                                    <td>{worker.bank}</td>
                                    <td>{worker.phone}</td>
                                    <td>{worker.amount}</td>
                                    <td>
                                        <span className={`status ${worker.status}`}>
                                            {worker.status === 'pagado' ? 'Pagado' : 'Sin pagar'}
                                        </span>
                                    </td>
                                    <td><button className="send-btn">Enviar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <AddWorkerModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                onSave={handleSaveWorker}
            />
        </div>
    );
};

export default WorkersView;