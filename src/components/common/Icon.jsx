import React from 'react'

const Icon = ({ icon, className, pathClassName }) => {
    const iconList = {
        menuIcon: (
            <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0_70_228"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="25"
                >
                    <rect x="0.5" y="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_70_228)">
                    <path
                        d="M3.5 7.5V5.5H21.5V7.5H3.5ZM3.5 19.5V17.5H21.5V19.5H3.5ZM3.5 13.5V11.5H21.5V13.5H3.5Z"
                        fill="#5B82BD"
                    />
                </g>
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