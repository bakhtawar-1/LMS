import React from 'react';
import './feeStructure.css';

const FeeStructure = () => {
    const feeData = {
        "Computer Science": [1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        "Electrical Engineering": [1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550],
        "Business Administration": [900, 950, 1000, 1050, 1100, 1150, 1200, 1250],
    };

    return (
        <div className="fee-structure">
            <h1>Fee Structure</h1>
            {Object.keys(feeData).map((department, index) => (
                <div key={index} className="department-table">
                    <h2>{department}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Semester</th>
                                <th>Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeData[department].map((fee, semesterIndex) => (
                                <tr key={semesterIndex}>
                                    <td>{semesterIndex + 1}</td>
                                    <td>${fee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default FeeStructure;
