import React from 'react';
import '../styles/AdminDashboard.css';

const SearchAndFilter = ({ searchTerm, onSearch, statusFilter, onStatusFilterChange }) => {
    return (
        <div className="search-section">
            <div className="search-controls">
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre..." 
                        value={searchTerm}
                        onChange={onSearch}
                    />
                </div>
                <select 
                    className="status-filter"
                    value={statusFilter}
                    onChange={onStatusFilterChange}
                >
                    <option value="todos">Todos</option>
                    <option value="al-dia">Al día</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="sin-pagar">Sin pagar</option>
                </select>
            </div>
        </div>
    );
};

export default SearchAndFilter;