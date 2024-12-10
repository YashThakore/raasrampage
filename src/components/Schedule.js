import React, { useEffect, useState } from 'react';
import './Schedule.css';

const Schedule = () => {
    const [fridaySchedule, setFridaySchedule] = useState([]);
    const [saturdaySchedule, setSaturdaySchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the backend APIs for both Friday and Saturday
        const fetchScheduleData = async () => {
            try {
                const [fridayResponse, saturdayResponse] = await Promise.all([
                    fetch('https://raasrampage-backend.onrender.com/api/sheets/Friday'),
                    fetch('https://raasrampage-backend.onrender.com/api/sheets/Saturday')
                ]);

                if (!fridayResponse.ok || !saturdayResponse.ok) {
                    throw new Error('Failed to fetch schedule data');
                }

                const fridayData = await fridayResponse.json();
                const saturdayData = await saturdayResponse.json();

                setFridaySchedule(fridayData.slice(1)); // Skip the first row (title row)
                setSaturdaySchedule(saturdayData.slice(1));
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
        <div className="schedule-container">
            <h1>Master Schedule</h1>
            <div className="button-container">
                <button>Teams</button>
                <button>Board/Liaison</button>
            </div>
            <h2>Friday Schedule</h2>
            <ScheduleTable scheduleData={fridaySchedule} />
            <h2>Saturday Schedule</h2>
            <ScheduleTable scheduleData={saturdaySchedule} />
        </div>
    );
};

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
        <table className="schedule-table">
            <thead>
                <tr>
                    {scheduleData[0] && scheduleData[0].map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {scheduleData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={getRowClass(row[3])}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Schedule;
