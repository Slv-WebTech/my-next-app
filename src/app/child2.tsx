'use client'; // Mark as client component

import React, { useState, ReactNode } from 'react';

interface Child2Props {
    onSendComponent: (component: ReactNode) => void;
    parentMessage: string;
    onMessageChange: (message: string) => void;
    childId: number;
}

const Child2: React.FC<Child2Props> = ({ parentMessage, onSendComponent, onMessageChange, childId }) => {
    const [selectedOption, setSelectedOption] = useState<string>('Option1');

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedOption(value);
        onMessageChange(value); // Send the selected option to the parent
    };

    const handleSendComponent = () => {
        // Create a JSX element and send it to the parent
        const customComponent = <button style={{ padding: '10px', backgroundColor: 'orange' }}>Child 2 Button</button>;
        onSendComponent(customComponent); // Send the component to the parent
    };

    return (
        <div style={{ border: "1px solid white;" }}>
            <p>Message from Parent: {parentMessage}</p>
            <h3>Child2 Component {childId}</h3>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="Option1">Option 1</option>
                <option value="Option2">Option 2</option>
                <option value="Option3">Option 3</option>
            </select>

            <button onClick={handleSendComponent}>Send Component to 2 Parent</button>
        </div>
    );
};

export default Child2;
