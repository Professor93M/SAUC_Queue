const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Tajawal", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                print: { raw: "print" },
            },
        },

        variants: {
            extend: {
                opacity: ["disabled"],
            },
        },

        plugins: [require("@tailwindcss/forms")],
    },
};
