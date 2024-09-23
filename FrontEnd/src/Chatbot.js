import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const azureEndpoint = 'https://MedSurveyAI-bot-053b.azurewebsites.net/api/messages';
    const azureKey = 'ab7f96ae661e4057a79d09bc2546aa1c';

    const sendMessage = async () => {
        if (input.trim() === '') return;

        // Append user message to the messages list
        setMessages([...messages, { text: input, sender: 'user' }]);

        try {
            const response = await axios.post(
                `${azureEndpoint}/language/:analyze-text`,
                {
                    // Customize this request payload according to your specific Language Service configuration
                    text: input,
                    parameters: {
                        projectName: "MedSurvey", // Replace with your project name
                        deploymentName: "Microsoft.Template-20240831064858", // Replace with your deployment name
                    }
                },
                {
                    headers: {
                        'Ocp-Apim-Subscription-Key': azureKey,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const botMessage = response.data.text; // Adjust this according to your Azure response structure
            setMessages([...messages, { text: input, sender: 'user' }, { text: botMessage, sender: 'bot' }]);
        } catch (error) {
            console.error('Error communicating with Azure Language Service:', error);
            setMessages([...messages, { text: input, sender: 'user' }, { text: 'Error: Unable to get response from Azure', sender: 'bot' }]);
        }

        setInput(''); // Clear the input field
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2>Azure Chatbot</h2>
            <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll', marginBottom: '10px' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                        <p><strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}</p>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
                style={{ width: '80%', padding: '10px' }}
            />
            <button onClick={sendMessage} style={{ width: '20%', padding: '10px' }}>Send</button>
        </div>
    );
};

export default Chatbot;
