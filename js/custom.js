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
    //calc trees denicty
    treeDenicty() {
        let denicty = this.numTrees / this.space
        return denicty
    }
    //calc age for every park
    parksAge() {
        let age = new Date().getFullYear() - this.buildYear;
        return age
    }
}

//calc avarage age for parks
const parksAvrAge = () => {
    let sumAges = 0;
    let parksNum = 0;
    townElements.forEach((val, key) => {
        if(key.includes('age') ) {
            sumAges += val;
            parksNum++
        }
    });
    return sumAges / parksNum
}

//detrmine which park has more than 1000 trees
const biggestPark = () => {
    let name;
    townElements.forEach((val, key) => {
        if(key.includes(``) && val > 1000) {
            name = key
        }
    });
    return name
}

//put the spicial data for parks
const parkOne = new Parks ('park one', 1990, 600, 10);
const parkTwo = new Parks ('park two', 1980, 2000, 20);
const parkThree = new Parks ('park three', 2000, 900, 30);


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
    townElements.forEach((val, key) => {
        if(key.includes('lenght') ) {
            sumLemght += val;
            streetsNum++
        }
    });
    return {
        sumLemght,
        avrLenght: sumLemght/ streetsNum
    } 
}

//put the spicial data for streets
const StreetOne = new Streets ('street one', 1990,10, 'small' );
const StreetTwo = new Streets ('street two', 1980,20);
const StreetThree = new Streets ('street three', 2000,30, 'big' );
const StreetFour = new Streets ('street four', 1900,40, 'huge' );


/*****
 data
 ****/

//store data in a map data structure
const townElements = new Map();
//num tress
townElements.set(`${parkOne.name}`, parkOne.numTrees);
townElements.set(`${parkTwo.name}`, parkTwo.numTrees);
townElements.set(`${parkThree.name}`, parkThree.numTrees)
//park denicty
townElements.set('parkOne denecty', parkOne.treeDenicty());
townElements.set('parkTwo denecty', parkTwo.treeDenicty());
townElements.set('parkThree denecty', parkThree.treeDenicty())
//parks age
townElements.set('parkOne age', parkOne.parksAge());
townElements.set('parkTwo age', parkTwo.parksAge());
townElements.set('parkThree age', parkThree.parksAge())
//parks avarage age
townElements.set('parksAvrAge', parksAvrAge())
townElements.set('biggestPark', biggestPark())
//streets lenght
townElements.set('StreetOne lenght', StreetOne.length);
townElements.set('StreetTwo lenght', StreetTwo.length);
townElements.set('StreetThree lenght', StreetThree.length)
townElements.set('StreetFour lenght', StreetFour.length)

// streets data
const townStreets = new Map();
townStreets.set('StreetOne', StreetOne);
townStreets.set('StreetTwo', StreetTwo);
townStreets.set('StreetThree', StreetThree)
townStreets.set('StreetFour', StreetFour)

//the report
console.log(`our 3 parks have an avarge age of ${townElements.get('parksAvrAge')} years
park one has a tree dencity of ${townElements.get('parkOne denecty')} trees per square Km
park two has a tree dencity of ${townElements.get('parkTwo denecty')} trees per square Km
park three has a tree dencity of ${townElements.get('parkThree denecty')} trees per square Km
${townElements.get('biggestPark')} has more than 1000 trees
our 4 streets have a total lenght of ${clacSumAndAvrLenght().sumLemght} Km, with an avarage with ${clacSumAndAvrLenght().avrLenght}
${`${StreetOne.name} built in ${StreetOne.buildYear} is a ${StreetOne.classification}`}
${`${StreetTwo.name} built in ${StreetTwo.buildYear} is a ${StreetTwo.classification}`}
${`${StreetThree.name} built in ${StreetThree.buildYear} is a ${StreetThree.classification}`}
${`${StreetFour.name} built in ${StreetFour.buildYear} is a ${StreetFour.classification}`}
`)