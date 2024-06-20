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

export {
    getTranslateString,
}