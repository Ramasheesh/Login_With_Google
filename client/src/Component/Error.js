import React from 'react';

const Error = () => {
    const errorStyle = {
        color: 'red',
        textAlign: 'center',
        marginTop: '20px',
        padding: '10px',
        fontSize: '1.5rem', // Default font size
        '@media (max-width: 768px)': { // Tablet and smaller devices
            fontSize: '1.2rem',
        },
        '@media (max-width: 480px)': { // Mobile devices
            fontSize: '1rem',
        }
    };

    return (
        <div style={errorStyle}>
            Error: Something went wrong.
        </div>
    );
}

export default Error;
