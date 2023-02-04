const d = document;

const searchFilters = (input, selector) => {
    d.addEventListener("keyup", (e) => {
        if (e.target.matches(input)) {
            console.log(e.key);
        }
    });
};

export default searchFilters;
