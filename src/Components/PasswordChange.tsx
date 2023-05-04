import React, { useState } from 'react';

export default function PasswordChange(): JSX.Element {
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [arePasswordsMatching, setArePasswordsMatching] = useState<boolean>(false);

    const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNewPassword(event.target.value);
        setArePasswordsMatching(event.target.value === confirmPassword);
    }

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setConfirmPassword(event.target.value);
        setArePasswordsMatching(event.target.value === newPassword);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault(); // prevents page from refreshing
        console.log(newPassword);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Old Password:
                    <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    New Password:
                    <input type="password" value={newPassword} onChange={handleNewPasswordChange}/>
                </label>
            </div>
            <div>
                <label>
                    Confirm Password:
                    <input type="input" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </label>
                {!arePasswordsMatching && <div style={{color: 'red'}}>Passwords do not match.</div>}
            </div>
            <button type='submit' disabled={!arePasswordsMatching}>
                Change password
            </button>
        </form>
    )
}