import React, { useState } from 'react';

interface HomeProps {
    text: string;
}

interface AboutProps {
    text: string;
}

interface ProfileProps {
    text: string;
}

function Home({ text }: HomeProps): JSX.Element {
    return <div>{ text }</div>
}

function About({ text }: AboutProps): JSX.Element {
    return <div>{ text }</div>
}

function Profile({ text }: ProfileProps): JSX.Element {
    return <div>{ text }</div>
}

export default function RouterApp(): JSX.Element {
    const [currentPage, setCurrentPage] = useState<string>('home');

    const handleButtonClick = (page: string): void => {
        setCurrentPage(page);
    }

    return (
        <div>
            <div>
                <button onClick={() => handleButtonClick('home')}>Home</button>
                <button onClick={() => handleButtonClick('about')}>About</button>
                <button onClick={() => handleButtonClick('profile')}>Profile</button>
            </div>
            {currentPage === 'home' && <Home text='Welcome to Home Page' />}
            {currentPage === 'about' && <About text='Welcome to About Page' />}
            {currentPage === 'profile' && <Profile text='Welcome to Profile Page' />}
        </div>
    )
}