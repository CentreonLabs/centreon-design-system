const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Red Hat Display", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				text: "rgba(var(--Text-Text), <alpha-value>)",
				"text-invert": "rgba(var(--Text-Invert), <alpha-value>)",
				"text-secondary": "rgba(var(--Text-Text-Secondary), <alpha-value>)",
				"text-disabled": "rgba(var(--Text-Disabled), <alpha-value>)",
				"text-primary": "rgba(var(--Text-Primary), <alpha-value>)",
				"surface-default": "rgba((--Surface-Default), <alpha-value>)",
				"surface-primary": "rgba(var(--Surface-Primary), <alpha-value>)",
				"surface-primary-hover":
					"rgba(var(--Surface-Primary-Hover), <alpha-value>)",
				"surface-primary-pressed":
					"rgba(var(--Surface-Primary-Pressed), <alpha-value>)",
				"surface-primary-focused":
					"rgba(var(--Surface-Primary-Focused), <alpha-value>)",
				"surface-disabled": "rgba(var(--Surface-Disabled), <alpha-value>)",
				"surface-contrast-default":
					"rgba(var(--Surface-Contrast-Default), <alpha-value>)",
				"surface-divider": "rgba(var(--Surface-Divider), <alpha-value>)",
				"surface-gray": "rgba(var(--Surface-Gray), <alpha-value>)",
				"surface-contrast-gray":
					"rgba(var(--Surface-Contrast-Gray), <alpha-value>)",
				"surface-primary-tonal":
					"rgba(var(--Surface-Primary-Tonal), <alpha-value>)",
				"surface-primary-focused-tonal":
					"rgba(var(--Surface-Primary-Focused-Tonal), <alpha-value>)",
				"surface-primary-pressed-tonal":
					"rgba(var(--Surface-Primary-Pressed-Tonal), <alpha-value>)",
				"surface-primary-hover-tonal":
					"rgba(var(--Surface-Primary-Hover-Tonal), <alpha-value>)",
				"surface-primary-focused-effect":
					"rgba(var(--Surface-Primary-Focused-Effect))",
				"surface-primary-pressed-effect":
					"rgba(var(--Surface-Primary-Pressed-Effect))",
				"surface-primary-hover-effect":
					"rgba(var(--Surface-Primary-Hover-Effect))",
				"surface-disabled-effect": "rgba(var(--Surface-Disabled-Effect))",
				"surface-tooltip": "rgba(var(--Surface-Tooltip), <alpha-value>)",
			},
		},
		fontSize: {
			sm: ["12px", "14px"],
			base: ["14px", "16px"],
			lg: ["16px", "18px"],
			"label-sm": ["12px", "14px"],
			"label-md": ["14px", "16px"],
			"label-lg": ["16px", "18px"],
		},
	},
	plugins: [],
};
