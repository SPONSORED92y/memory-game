function shuffle(array) {
    var array2 = array.map((x) => x);
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array2[currentIndex], array2[randomIndex]] = [
            array2[randomIndex], array2[currentIndex]];
    }

    return array2;
}

export default shuffle;

// Used like so
// var arr = [2, 11, 37, 42];
// var arr2 = shuffle(arr);
// console.log(arr);
// console.log(arr2);