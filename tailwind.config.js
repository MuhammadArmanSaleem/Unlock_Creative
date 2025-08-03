import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import COLORS from './resources/js/constants/colors.jsx';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                // Dark colors
                'dark-1': COLORS.firstdarkcolor,
                'dark-2': COLORS.seconddarkcolor,
                'dark-3': COLORS.thirddarkcolor,

                // Primary colors
                'primary-1': COLORS.firstprimarycolor,
                'primary-2': COLORS.secondprimarycolor,
                'primary-3': COLORS.thirdprimarycolor,
                'primary-4': COLORS.fourthprimarycolor,

                // Secondary colors
                'secondary-1': COLORS.firstsecondarycolor,
                'secondary-2': COLORS.secondsecondarycolor,

                // Light colors
                'light-1': COLORS.firstlightcolor,
                'light-2': COLORS.secondlightcolor,
                'light-3': COLORS.thirdlightcolor,

                // Additional colors
                'blue': '#00bfff',
                'grey': '#DCDFE5',
                'lime': '#A4D65E',
                'green': '#00FF00',
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out',
                'underline': 'underline 1.5s ease-out forwards',
                'marquee': 'marquee 30s linear infinite',
                'marquee2': 'marquee2 30s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                underline: {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            }
        },
    },

    plugins: [forms],
};