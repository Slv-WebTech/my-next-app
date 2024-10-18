'use client'; // Mark as client component

import React, { useState, ReactNode } from 'react';
import Custom from './custom';

interface Child3Props {
    onSendComponent: (component: ReactNode) => void;

    parentMessage: string;
    onMessageChange: (message: string) => void;
    childId: number;
}

const Child3: React.FC<Child3Props> = ({ parentMessage, onSendComponent, onMessageChange, childId }) => {
    const [childMessage, setChildMessage] = useState<string>('');

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setChildMessage(value);
        onMessageChange(value); // Send the message to the parent
    };

    const handleSendComponent = () => {
        // Create a JSX element and send it to the parent
        // const customComponent = <button style={{ padding: '10px', backgroundColor: 'orange' }}>Child 3 Button</button>;
        onSendComponent(<Custom onSendComponent={onSendComponent} />); // Send the component to the parent
    };

    // const handleReceiveComponent = (component: ReactNode) => {
    //     // Handle the component received from Custom
    //     console.log('Received component from Custom:', component);
    //     // You can do something with the received component here
    // };

    return (
        <div style={{ border: "1px solid white;" }}> <p>Message from Parent: {parentMessage}</p>
            <h3>Child3 Component {childId}</h3>
            <textarea
                value={childMessage}
                onChange={handleTextAreaChange}
                placeholder={`Type something for Child3 ${childId}...`}
                rows={4}
            />
            <button onClick={handleSendComponent}>Send Component to 3 Parent</button>
        </div>
    );
};

export default Child3;
