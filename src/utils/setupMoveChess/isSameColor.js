const isSameColor = (piece1, piece2) => {
    if (!piece1 || !piece2) return false;
    return piece1.color === piece2.color;
};

export default isSameColor;
