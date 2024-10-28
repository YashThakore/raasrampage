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
                        <tr key={rowIndex}>
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

export default Schedule;

function applyHighlights() {
    const rows = document.querySelectorAll('.schedule-table tbody tr');
    rows.forEach(row => {
        const eventText = row.cells[3]?.innerText.toLowerCase();
        if (eventText.includes('optional')) {
            row.cells[3].classList.add('orange-highlight');
        } else if (eventText.includes('drive')) {
            row.cells[3].classList.add('green-highlight');
        } else if (eventText.includes('mixer') || eventText.includes('transition')) {
            row.cells[3].classList.add('blue-highlight');
        }
    });
}
applyHighlights();