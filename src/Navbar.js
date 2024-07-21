import React from 'react';

const StringSplitter = ({ inputString }) => {
    const splitStringUsingRegex = (str) => {
        const characters = [];
        const regex = /[\s\S]/gu;

        let match;

        while ((match = regex.exec(str)) !== null) {
            characters.push(match[0]);
        }

        return characters;
    };

    const characters = splitStringUsingRegex(inputString);

    return (
        <div>
            {characters.map((char, index) => (
                <span key={index}>{char}</span>
            ))}
        </div>
    );
};

export default StringSplitter;