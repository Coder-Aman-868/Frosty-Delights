import React from 'react'

const Icon = ({ icon, className, pathClassName }) => {
    const iconList = {

        dropdownArrow: (
            <svg className={className} width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5L0.736861 0.499999L10.2631 0.5L5.5 5Z" fill="white" />
            </svg>
        ),
    }

    const addClassName = (icon) => {
        return React.cloneElement(icon, {
            className: ((icon.props.className) || "") + " custom-class",
        });
    };

    const iconsNew = Object.fromEntries(
        Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)])
    );

    return iconsNew[icon] || null;
}

export default Icon