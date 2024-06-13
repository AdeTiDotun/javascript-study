//function coding challenge

const calcAverage = (a, b, c) => {
    let res = (a + b + c) / 3;
    return res;
}


const dolphins1 = calcAverage(44, 23, 71);
console.log(dolphins1);

const dolphins2 = calcAverage(85, 54, 41);
console.log(dolphins2);

const koalas1 = calcAverage(65, 54, 49);
console.log(koalas1);

const koalas2 = calcAverage(23, 34, 27);
console.log(koalas2)


// Question 3
// instructions to find winners
function checkWinner (avgDolhins, avgKoalas) {
    if(avgDolhins > avgKoalas) {
        console.log(`Dolhins wins with a score of ${ avgDolhins }`)
    } else {
        console.log(`Koalas wins with a score of ${ avgKoalas }`)
    }

}

// checking for winners
checkWinner(dolphins1, koalas1);
checkWinner(dolphins2, koalas2);