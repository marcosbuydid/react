import {
    getFullInformation, getRestaurantById,
    filterRestaurantByOwner, getRestaurantByIdAsync,
    getImage, getImageWrongApiKey
} from "../../javascript-basics/src";
import { getAddressInformation } from "../../javascript-basics/src";
import { getArrayData } from "../../javascript-basics/src";
import { restaurants } from "../../javascript-basics/src/data/restaurants";

describe('Tests on index.js', () => {

    test('getFullInformation() should return name + lastName + age', () => {

        const name = 'Tim';
        const lastName = 'Bricks';
        const age = 34;

        const message = getFullInformation(name, lastName, age);

        expect(message).toBe(name + ' ' + lastName + ' ' + age);

    });

    test('getAddressInformation() should return same street,zip,state and country', () => {

        const personData = {
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

        const address = getAddressInformation(personData);

        expect(address).toStrictEqual({
            street: 'Rockaway Blvd/124 St',
            zip: 11420,
            state: 'New York',
            country: 'United States',
        });
    })

    test('getArrayData() should return a string and a number', () => {

        const [words, numbers] = getArrayData();
        expect(words).toBe('ABC');
        expect(numbers).toBe(124);
        expect(typeof words).toBe('string');
        expect(typeof numbers).toBe('number');
    })

    test('getRestaurantById() should return a restaurant based on the id', () => {

        const id = 3;
        const restaurant = getRestaurantById(3);
        expect(restaurant).toEqual({ id: 3, name: 'Odette', owner: 'Julien Royer' });
    })

    test('getRestaurantById() should return undefined if id is not present', () => {

        const id = 13;
        const restaurant = getRestaurantById(13);
        expect(restaurant).toBeFalsy();
    })

    test('filterRestaurantByOwner() should return the restaurant of the owner', () => {

        const owner = 'Ana Ros';
        const restaurant = filterRestaurantByOwner(owner);
        expect(restaurant).toEqual(restaurants.filter((restaurant) => restaurant.owner.includes(owner)));
    })

    test('getRestaurantByIdAsync() should return a restaurant if id is valid', (done) => {

        const id = 4;
        getRestaurantByIdAsync(id).then(restaurant => {
            expect(restaurant).toEqual({
                id: 4,
                name: 'Atelier Crenn',
                owner: 'Dominique Crenn'
            });
            //done() tell to jest to wait until the last function finish
            done();
        });
    })

    test('getRestaurantByIdAsync() should return an error if restaurant not exists', (done) => {

        const id = 140;
        getRestaurantByIdAsync(id).then(restaurant => {
            expect(restaurant).toBeFalsy();
            done();
        })
            .catch(error => { expect(error).toBe(`Cannot find the restaurant with this id`) })
        done();
    })

    test('getImage() should return the image url', async () => {

        const imageUrl = await getImage();
        expect(typeof imageUrl).toBe('string');
    })

    test('getImageWrongApiKey() should return undefined if the url is not valid', async () => {

        const response = await getImageWrongApiKey();
        console.log(response)
        expect(typeof response).toBe('undefined');
    })
})