const cats = ['Milo', 'Otis', 'Garfield'];
console.log(cats);
function destructivelyAppendCat(string) {
    cats.push('Ralph');
};
function destructivelyPrependCat(string) {
    cats.unshift('Bob');
};
function destructivelyRemoveLastCat(string) {
    cats.pop('Ralph');
};
function destructivelyRemoveFirstCat(string) {
    cats.shift('Bob');
};
function appendCat(string) {
    return [...cats, 'Broom'];
}
function prependCat(string) {
    return ['Arnold', ...cats];
};
function removeLastCat() {
    return cats.slice(0, -1);
};
function removeFirstCat() {
    return cats.slice(1);
};