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
            // fontFamily: {
            //         sans: ["Tajawal", ...defaultTheme.fontFamily.sans],
            //     },
            screens: {
                print: { raw: "print" },
            },
            colors: {
                background: "#f5f5f5",
                nav: "#157575",
                btn: "#112758",
                qnum: "#ead7c7",
            },
            spacing: {
                97: "25rem",
                98: "26rem",
                99: "27rem",
                100: "28rem",
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
