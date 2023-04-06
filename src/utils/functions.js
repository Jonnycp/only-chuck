export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getFrase = (category) => {
    category = convertCategory(category);
    
    return fetch(`https://api.chucknorris.io/jokes/random${category ? `?category=${category}` : ''}`)
    .then(res => res.json())
    .then(data => data.value)
    .catch(err => console.err(err));
}

export const convertCategory = (category) => {
    return category === "random" ? undefined : category;
}