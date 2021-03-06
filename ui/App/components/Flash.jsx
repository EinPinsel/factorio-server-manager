import React, { useEffect, useState } from 'react';
import Bus from '../../notifications';

export const Flash = () => {
    let [visibility, setVisibility] = useState(false);
    let [message, setMessage] = useState('');
    let [color, setColor] = useState('');

    useEffect(() => {
        Bus.addListener('flash', ({message, color}) => {
            setVisibility(true);
            setMessage(message);
            setColor(color);
            setTimeout(() => {
                setVisibility(false);
            }, 4000);
        });
    }, []);

    return (
        visibility && <div className={`bg-${color} accentuated rounded fixed bottom-0 right-0 mr-8 mb-8 px-4 py-2`}>
            <p>{message}</p>
        </div>
    )
}