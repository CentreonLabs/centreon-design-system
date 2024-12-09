# Centreon design system

This project aims to recreate partially a design system from scratch by building it (almost) without any deps except TailwindCSS.

So far, we've created components for:
- Text
- Button
- IconButton
- Basic Card
- Tooltip
- The base component in order to handle Web SVG icons

## Requirements

- NodeJS >20
- PNPM 8: `npm i -g pnpm@8`

## Installation

`pnpm i --frozen-lockfile`

## Development

Run the storybook

```
pnpm storybook
```

## How it can be integrated in a project?

- Install requirements (tailwindcss, postcss, postcss-import, autoprefixer)
- Install the dependency using a NodeJS package manager (Not available yet)
- Create a basic postcss config file in the root directory (Don't forget to handle it by your build tool if it doesn't handle it automatically)

```
export default {
	plugins: {
		"postcss-import": {},
		tailwindcss: {},
		autoprefixer: {},
	},
};
```

or 

```
module.exports = {
	plugins: {
		"postcss-import": {},
		tailwindcss: {},
		autoprefixer: {},
	},
};
```

- Create a TailwindCSS file and add the library preset

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('centreon-design-system/tailwind-preset.js')
  ],
  // ...
}
```

- Import the CSS theme into your tailwind CSS file `@import "centreon-design-system/theme.css";`. Add the previous file after all of your `@import`.

### (Optional) Integrate fonts

- Download Red Hat Display font from Google fonts (https://fonts.google.com/specimen/Red+Hat+Display)
- Extract variable font files inside your source
- Add the following code into your tailwind CSS file

```
@supports (font-variation-settings: normal) {
	@font-face {
		font-family: "Red Hat Display";
		font-style: normal;
		font-weight: 100 900;
		font-display: swap;
		src: url("/<path-to-your-font-folder>/RedHatDisplay-VariableFont_wght.ttf");
		font-named-instance: "Regular";
	}

	@font-face {
		font-family: "Red Hat Display";
		font-style: italic;
		font-weight: 100 900;
		font-display: swap;
		src: url("/<path-to-your-font-folder>/RedHatDisplay-Italic-VariableFont_wght.ttf");
		font-named-instance: "Italic";
	}
}
```

