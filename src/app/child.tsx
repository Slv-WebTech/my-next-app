'use client'; // Mark as client component

import React, { useState, ReactNode } from 'react';

interface Child1Props {
    parentMessage: string;
    onSendComponent: (component: ReactNode) => void; // Callback to send component to parent
    onMessageChange: (message: string) => void;
    childId: number;
}

const Child1: React.FC<Child1Props> = ({ parentMessage, onSendComponent, onMessageChange, childId }) => {
    const [childMessage, setChildMessage] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setChildMessage(value);
        onMessageChange(value); // Send the message to the parent
    };

    const handleSendComponent = () => {
        // Create a JSX element and send it to the parent
        const customComponent = <button style={{ padding: '10px', backgroundColor: 'orange' }}>Child1 Button</button>;
        onSendComponent(customComponent); // Send the component to the parent
    };

    return (
        <div>
            <h3>Child1 Component {childId}</h3>
            <p>Message from Parent: {parentMessage}</p>
            <input
                type="text"
                value={childMessage}
                onChange={handleInputChange}
                placeholder={`Type something for Child1 ${childId}...`}
            />

            {/* Button to trigger sending component to parent */}
            <button onClick={handleSendComponent}>Send Component to Parent</button>
        </div>
    );
};

export default Child1;
