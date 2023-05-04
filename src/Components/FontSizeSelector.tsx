import React, { useState} from 'react';

const FONT_SIZES = [16, 24, 32, 40, 48];
const BEST_FONTS = ['Arial', 'Helvetica', 'Roboto', 'Open Sans', 'Lato'];
const HEADING_FONTS = ['Montserrat', 'Oswald', 'Raleway', 'Playfair Display', 'Abril Fatface'];
const TEXT_FONTS = ['Noto Sans', 'PT Sans', 'Source Sans Pro', 'Lora', 'Merriweather'];

export default function FontSizeSelector(): JSX.Element {
    const [fontSize, setFontSize] = useState<number>(FONT_SIZES[0]);

    const handleIncreaseFontSizeClick = (): void => {
        const index = FONT_SIZES.indexOf(fontSize);
        if (index < FONT_SIZES.length - 1) {
            setFontSize(FONT_SIZES[index + 1]);
        }
    }

    const handleDecreaseFontSizeClick = (): void => {
        const index = FONT_SIZES.indexOf(fontSize);
        if (index > 0) {
            setFontSize(FONT_SIZES[index - 1]);
        }
    }

    return (
        <div>
            <div style={{ fontSize: `${fontSize}px`}}>Selected Font Size: {fontSize}px</div>
            <button type='button' onClick={handleDecreaseFontSizeClick}>-</button>
            <button type='button' onClick={handleIncreaseFontSizeClick}>+</button>
        </div>
    )
}