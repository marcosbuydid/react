/** @jest-environment jsdom */

import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '../src/App';
import React from 'react';

describe('Tests on <App />', () => {

    const title = 'CounterApp';
    const initialValue = 0;

    test('container must match with the snapshot', () => {
        const { container } = render(<App title={title} counter={initialValue} />)
        expect(container).toMatchSnapshot();
    })

    test('initial value of 100 must be showed', () => {
        render(<App title={title} counter={100} />)
        expect(screen.getByText('100'));
    })

    test('initial value must increase when increment button is pressed', () => {
        render(<App title={title} counter={initialValue} />)
        fireEvent.click(screen.getByText('Increment'))
        expect(screen.getByText('1')).toBeTruthy();
    })

    test('initial value must decrease when decrement button is pressed', () => {
        render(<App title={title} counter={initialValue} />)
        fireEvent.click(screen.getByText('Decrement'))
        expect(screen.getByText('-1')).toBeTruthy();
    })

    test('initial value must be 0 when reset button is pressed', () => {
        render(<App title={title} counter={120} />)
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText('0')).toBeTruthy();
    })
});