import React, { useState } from 'react';

export default function CharacterCounter() {
    const [text, setText] = useState("");

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
        console.log(text);
    }

    return (
        <div>
            <input type='text' onChange={handleChange} value={text} />
            <span>{text.length}</span>
        </div>
    )
}   