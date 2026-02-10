import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    to,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button'
}) => {
    const baseStyles = "px-10 py-4 rounded-full font-bold text-base transition-all shadow-lg inline-flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-brand-primary text-white hover:bg-[#1E3A8A] border-none",
        secondary: "bg-[#F5A716] text-white hover:bg-brand-primary border-none",
        outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
        white: "bg-white text-slate-900 hover:bg-[#F5A716] hover:text-white"
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type={type}
            onClick={onClick}
            className={combinedStyles}
        >
            {children}
        </motion.button>
    );
};

export default Button;
