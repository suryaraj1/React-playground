import React, { useState } from 'react';

interface ToastProps {
    text: string;
    hideToast: () => void;
}

function Toast({ text, hideToast}: ToastProps): JSX.Element {
    return (
        <div>
            <p>{text}</p>
            <button onClick={hideToast}>Hide</button>
        </div>
    )
}

export default function ToastControl(): JSX.Element {
    const [showToast, setShowToast] = useState<boolean>(false);

    const handleShowToast = (): void => setShowToast(true);

    const handleHideToast = (): void => setShowToast(false);

    return (
        <div>
            <button onClick={handleShowToast}>Show Toast</button>
            {showToast && <Toast text="Hello, this is a toast message" hideToast={handleHideToast} />}
        </div>
    )
}