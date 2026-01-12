import React, { useState } from 'react';

const CopyInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={handleCopy}>Copy</button>
            {copied && <span>Copied!</span>}
        </div>
    );
};

export default CopyInput;