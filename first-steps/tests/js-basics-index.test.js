import { getFullInformation } from "../../javascript-basics/src";
import { getAddressInformation } from "../../javascript-basics/src";

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
})