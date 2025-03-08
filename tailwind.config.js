// tailwind.config.js
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            container: {
                center: true, // Centers the container by default
                padding: '2rem', // Adds padding to the container
                maxWidth: '150%', // Makes the container width 100% on all screens
            },
        },
    },
    plugins: [],
};
