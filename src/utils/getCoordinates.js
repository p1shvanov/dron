export const getCoordinates = (width, length) => {
    return [Number((width / 1e7).toFixed(5)), Number((length / 1e7).toFixed(5))];
};
