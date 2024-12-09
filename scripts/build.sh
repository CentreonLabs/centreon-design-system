#! /bin/sh

echo "Removing dist folder..."
rm -rf ../dist

echo "Building lib..."
pnpm build

echo "Exporting tailwind config file..."
cp ./tailwind.config.js ./dist/tailwind-preset.js

echo "Exporting tailwind CSS file..."
cp ./src/theme.css ./dist/theme.css
