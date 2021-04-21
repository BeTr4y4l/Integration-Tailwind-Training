module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./index.html', './app.js'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            greydarker: "#343a40",
            greylight: "#e9ecef",
            white: "#f8f9fa",
            blue: "#077dfc",
        },
        screens: {
            xsm: "640px",
            sm: "768px",
            md: "1024px",
            lg: "1280px",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};