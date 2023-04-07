export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getFrase = (category) => {
    category = convertCategory(category);
    
    return fetch(`https://api.chucknorris.io/jokes/random${category ? `?category=${category}` : ''}`)
    .then(res => res.json())
    .then(data => data.value)
    .catch(err => console.err(err));
};

export const convertCategory = (category) => {
    return category === "random" ? undefined : category;
};

export const generateColors = (length) => {
    const colors = [];
    for (let i = 0; i < length; i++) {
        colors.push(randomColor());
    }
    return colors;
};

export const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const generateSegments = (obj) => {
    const segments = [];
    for (let key in obj) {
        segments.push(obj[key] + " " + capitalize(key));
    }
    return segments;
};

export const getWinner = (winner) => {
    return winner.split(" ")[1].toLowerCase();
};