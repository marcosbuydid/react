import { restaurants } from './data/restaurants';

//Constants
const name = 'Your name';
const lastName = 'Your lastName';

//Variables
let age = 34;
age = 35;

//Function
export function getFullInformation(name, lastName, age) {
    return name + ' ' + lastName + ' ' + age;
}

const getPersonDetails = (name, lastName, age) => {
    return name + ' ' + lastName + ' ' + age;
}

console.log((getFullInformation(name, lastName, age)));
console.log((getPersonDetails('Lara', 'Bisnett', 27)));

//literal objects
const person = {
    name: 'Tim',
    lastName: 'Szas',
    age: 29,
    address: {
        street: 'Rockaway Blvd/124 St',
        zip: 11420,
        state: 'New York',
        country: 'United States',
    }
}

//clone object
const personTwo = { ...person };
personTwo.name = 'Cedrick';

console.log(person);
console.log(personTwo);

//array
const array = [1, 2, 3, 4];

const array2 = [...array, 5];

console.log(array2);

//object destructure

//rename variables because are already in use
const { name: name2, age: age2, address } = person;
console.log(name2);
console.log(age2);
console.log(address);

export const getAddressInformation = (person) => {
    return person.address;
}

//getInformation(person);

const personNames = ['Nick', 'Michael', 'Peter'];
console.log(personNames[1]);

const useState = (value) => {
    return [value, () => { console.log('Hello World') }];
}

//import export and common array functions
const getRestaurantById = (id) => {
    return (restaurants).find((restaurant) => restaurant.id === id);
}

const filterRestaurantByOwner = (owner) => {
    return (restaurants).filter((restaurant) => restaurant.owner.includes(owner));
}

console.log(getRestaurantById(4));

console.log(filterRestaurantByOwner('Dominique'));

//Promises
const getRestaurantByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const restaurant = getRestaurantById(id);
            if (restaurant) {
                resolve(restaurant);
            }
            else {
                reject('Cannot find the restaurant');
            }
        }, 2000)
    });

};

getRestaurantByIdAsync(5)
    .then((restaurant) => console.log('restaurant', restaurant))
    .catch(error => console.warn(error));


//fetch API using giphy.com
const apiKey = 'OTqQ2Jl2JvdRzZtZylYRmuPeGjSTCo4z';
const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

petition
    .then(response => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })
    .catch(console.warn)


//async and await

/*
When defining a function as async we can use the keyword "await"
before of any expression that returns a promise. By doing that
the external function (async) will pause until the promise is resolved.
The keyword await receives a promise and convert it to a return value
(or generate an exception error).
When using await, javascypt will wait until the promise finish. If is
completed with success the obtained value is returned, else if is 
rejected, an error is throwed by the exception.
*/

const getImage = async () => {
    try {
        const apiKey = 'OTqQ2Jl2JvdRzZtZylYRmuPeGjSTCo4z';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}

getImage();
