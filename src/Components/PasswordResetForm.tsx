import React, { useState } from 'react';

export default function PasswordResetForm(): JSX.Element {
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => setPassword(event.target.value);

    const handleShowPasswordClick = (): void => setShowPassword(!showPassword);

    return (
        <form>
            <div>
                <label>
                    Password:
                    <input type={showPassword ? 'text': 'password'} value={password} onChange={handlePasswordChange} />
                </label>
                <button type="button" onClick={handleShowPasswordClick}>{showPassword ? 'Hide Password' : 'Show Password'}</button>
            </div>
            <button type='submit'>Reset Password</button>
        </form>
    )
}  