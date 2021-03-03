import React from 'react';

const NotFound = () => {
    const notFoundStyle = {
        textAlign: 'center',
        color: 'red',
        marginTop: '10rem'
    }
    return (
        <div style={notFoundStyle}>
            <h1>Sorry, page not found</h1>
            <h4>404 Error!!!</h4>
        </div>
    );
};

export default NotFound;