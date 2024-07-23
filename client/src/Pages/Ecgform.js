// src/App.js
import React, { useState } from 'react';
import ECGGraph from './Ecg_graph.js';
import { PatientsData } from './patientData.js';
import "../Style.css"

const jsonData = PatientsData;
const ecgData = JSON.parse(jsonData).data;

function Ecgform() {
    const [isRunning, setIsRunning] = useState(true);

    return (
        <div className="App">
            <div className=' d-flex flex-row mt-5 justify-content-center align-items-center' >
                <div className='' style={{ transform: 'translateY(-20px)' }}>
                    <ECGGraph style={{ width: '1000px', height: '100px' }} data={ecgData} isRunning={isRunning} />
                </div>
            </div>
        </div >
    );
}

export default Ecgform;