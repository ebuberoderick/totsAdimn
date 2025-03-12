import React, { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const PreferenceChip = ({ onPress, text, compare, showClose, value, inversed }) => {
    const [pickedColor, setPickedColor] = useState("");

    const isExist = compare.includes(value);

    const colorString = (length) => {
        let result = "";
        const characters = "abcdef0123456789";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const genColor = () => {
        const hexColor = "#" + colorString(6);
        const c = hexColor.substring(1);
        const rgb = parseInt(c, 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (luma < 100) {
            setPickedColor(hexColor);
        } else {
            genColor();
        }
    };

    useEffect(() => {
        genColor();
    }, []);

    return (
        <div className="relative">
            {(isExist || inversed) && (
                <span className="absolute -top-1 -right-2 text-blue"><BsCheck2 /></span>
            )}
            {!isExist && showClose && (
                <span className="absolute -top-1 -right-2 text-danger"><IoCloseOutline /></span>
            )}
            <button
                onClick={() => onPress && onPress(value)}
                className="py-1 px-6 text-sm border rounded-md"
                style={{ backgroundColor: pickedColor + "43", borderColor: pickedColor + "50", color: pickedColor }}
            >
                {text}
            </button>
        </div>
    );
};

export default PreferenceChip;
