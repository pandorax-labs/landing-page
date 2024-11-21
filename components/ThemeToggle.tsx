'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.body.classList.toggle('dark', savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        const newTheme = !isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button onClick={toggleTheme} className="p-2 rounded-md">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
    );
};

export default ThemeToggle;