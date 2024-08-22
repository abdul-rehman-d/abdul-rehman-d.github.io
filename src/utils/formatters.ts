function getTranslateString({
    x,
    y,
    z,
}: {
    x: string;
    y: string;
    z: string;
}) {
    return `${x} ${y} ${z}`;
}

function hexToRGB(hex: string): string {
    if (hex.length !== 7 && hex.length !== 6) {
        throw new Error("not a valid hex color")
    }
    if (hex.length === 7) {
        hex = hex.slice(1)
    }

    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)

    return `${r}, ${g}, ${b}`
}

export {
    getTranslateString,
    hexToRGB,
}