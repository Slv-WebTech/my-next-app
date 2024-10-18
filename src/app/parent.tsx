'use client'; // Mark as client component

import React, { useState, ReactNode } from 'react';
import Child1 from './child';
import Child2 from './child2';
import Child3 from './child3';
// import MediaCard from './custom'; // Import MediaCard

const Parent: React.FC = () => {
    const [receivedComponent, setReceivedComponent] = useState<ReactNode>(null);
    const [childMessages, setChildMessages] = useState<{ [key: number]: string }>({
        1: '',
        2: '',
        3: '',
    });

    const [parentMessage, setParentMessage] = useState<string>('Hello from Parent!');

    const handleChildMessageChange = (message: string, childId: number) => {
        setChildMessages((prevMessages) => ({
            ...prevMessages,
            [childId]: message,
        }));
    };

    // Callback to receive a component from child
    const handleReceiveComponent = (component: ReactNode) => {
        setReceivedComponent(component); // Store the received component
    };

    return (
        <div>
            <h2>Parent Component</h2>
            <p>Message from Child 1: {childMessages[1]}</p>
            <p>Message from Child 2: {childMessages[2]}</p>
            <p>Message from Child 3: {childMessages[3]}</p>

            <p>Sending Message to Children: {parentMessage}</p>

            {/* Render the component received from child */}
            {receivedComponent && (
                <div>
                    <h3>Component received from child:</h3>
                    {receivedComponent}
                </div>
            )}

            {/* Pass parentMessage, custom component sender, and message handler to children */}
            <Child1
                parentMessage={parentMessage}
                onSendComponent={handleReceiveComponent} // Pass the callback to receive a component
                onMessageChange={(message) => handleChildMessageChange(message, 1)}
                childId={1}
            />
            <Child2
                parentMessage={parentMessage}
                onSendComponent={handleReceiveComponent}
                onMessageChange={(message) => handleChildMessageChange(message, 2)}
                childId={2}
            />
            <Child3
                parentMessage={parentMessage}
                onSendComponent={handleReceiveComponent}

                onMessageChange={(message) => handleChildMessageChange(message, 3)}
                childId={3}
            />
            {/* <MediaCard onSendComponent={handleReceiveComponent} /> */}
        </div>
    );
};

export default Parent;