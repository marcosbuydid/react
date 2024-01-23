describe('Demo test', () => {

    test('This test cannot fail', () => {

        const messageOne = 'This is a test string';

        const messageTwo = messageOne.trim();

        expect(messageOne).toBe(messageTwo);
    })

})
