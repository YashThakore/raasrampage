import React, { useEffect, useState } from 'react';
import './Schedule.css';

const Schedule = () => {
    const [scheduleData, setScheduleData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the backend API
        const fetchScheduleData = async () => {
            try {
                const response = await fetch('https://raasrampage-backend.onrender.com/api/sheets/Friday');
                console.log(response)
                if (!response.ok) {
                    throw new Error('Failed to fetch schedule data');
                }
                const data = await response.json();
                setScheduleData(data.slice(1)); // Skip the first row (title row)
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchScheduleData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <ScheduleTable scheduleData={scheduleData} />
        </div>
    );
};

export default Schedule;

const ScheduleTable = ({ scheduleData }) => {
    const getRowClass = (eventName) => {
        if (/registration|mixer/i.test(eventName)) {
            return "gold-row";
        } else if (/transition|drive/i.test(eventName)) {
            return "light-blue-row";
        }
        return "light-gray-row";
    };

    return (
        <div className="schedule-container">
            <h2>Friday Schedule</h2>
            <table className="schedule-table">
                <thead>
                    <tr>
                        {scheduleData[0] && scheduleData[0].map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {scheduleData.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex} className={getRowClass(row[3])}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
