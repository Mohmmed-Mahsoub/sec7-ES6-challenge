//general class for the Common things with all twon elements(name/ build year)
class TwonElements {
    constructor(name,buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

/*************
    Parks
 ************/

// specific class for parks
class Parks extends TwonElements {
    constructor(name,buildYear,numTrees, space) {
        super(name,buildYear)
        this.numTrees = numTrees;
        this.space = space;
    }
}
//calc avarage age for parks
const parksAvrAge = () => {
    let sumAges = 0;
    let parksNum = 0;
    twonParks.forEach((val, key) => {
        let age = new Date().getFullYear() - val.buildYear;
        sumAges += age;
        parksNum++
    });
    return sumAges / parksNum
}
//detrmine which park has more than 1000 trees
const biggestPark = () => {
    let name
    twonParks.forEach((val, key) => {
        if(val.numTrees > 1000) {
            name = val.name
        }
    });
    return name
}
//calc and show park denicty
const calcandShowParksDenicty = () => {
    let value, display = []
    twonParks.forEach((val) => {
        let denicty = val.numTrees / val.space
        value = `${val.name} has a tree dencity of ${denicty} trees per square Km`
        display.push(value)
    });
    return display
}


/***********
 streets
 *********/

 // specific class for streets
class Streets extends TwonElements {
    constructor(name,buildYear, lenght, classification = 'normal') {
        super(name,buildYear)
        this.length = lenght;
        this.classification = classification;
    }
}
const clacSumAndAvrLenght = () => {
    let sumLemght = 0;
    let streetsNum = 0;
    let avrLenght = 0;
    townStreets.forEach((val, key) => {
        sumLemght += val.length;
        streetsNum++
    });
    return {
        sumLemght,
        avrLenght: sumLemght/ streetsNum
    } 
}
const showStreetClassification = () => {
    let value, display = []
    townStreets.forEach((val) => {
        value = `${val.name} built in ${val.buildYear} is a ${val.classification}`
        display.push(value)
    });
    return display
}


/*****
 data
 ****/
//parks data
const twonParks = new Map();
twonParks.set('parkOne', new Parks ('park one', 1990, 600, 10));
twonParks.set('parkTwo', new Parks ('park two', 1980, 2000, 20));
twonParks.set('parkThree', new Parks ('park three', 2000, 900, 30));

// streets data
const townStreets = new Map();
townStreets.set('StreetOne', new Streets ('street one', 1990,10, 'small'));
townStreets.set('StreetTwo', new Streets ('street two', 1980,20));
townStreets.set('StreetThree', new Streets ('street three', 2000,30, 'big' ))
townStreets.set('StreetFour', new Streets ('street four', 1900,40, 'huge' ))

//the report
console.log(`----Parks Report-----
our ${twonParks.size} parks have an avarge age of ${parksAvrAge()} years`)
calcandShowParksDenicty().forEach((cur) => {
    console.log(cur)
});
console.log(`${biggestPark()} has more than 1000 trees
----Streets Report-----
our ${townStreets.size} streets have a total lenght of ${clacSumAndAvrLenght().sumLemght} Km, with an avarage with ${clacSumAndAvrLenght().avrLenght}
`)
showStreetClassification().forEach((cur) => {
    console.log(cur)
});
