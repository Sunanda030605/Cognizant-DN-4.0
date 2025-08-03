// src/EmployeeList.js
import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList() {
  const employees = [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Alice Johnson', role: 'Manager' },
  ];

  return (
    <div className="employee-list">
      {employees.map(emp => (
        <EmployeeCard key={emp.id} name={emp.name} role={emp.role} />
      ))}
    </div>
  );
}

export default EmployeeList;
