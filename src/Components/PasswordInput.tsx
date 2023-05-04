import React, { useState } from 'react';

export default function PasswordInput(): JSX.Element {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);

        if (!/\d/.test(event.target.value)) {
            setError('Password must contain at least one number');
        } else {
            setError('');
        }
    }

    return (
        <div>
            <label>Password:
                <input type='password' onChange={handleChange} value={password} />
                {error && <div style={{color: 'red'}}>{error}</div>}
            </label>
        </div>
    ) 
}