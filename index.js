
const text = "Wonderful Joyful Happiness Time Task Apple";
const pattern = /\b(?!\w*[aA])\w{6,}\b/g;

const res = text.match(pattern);
console.log(res)