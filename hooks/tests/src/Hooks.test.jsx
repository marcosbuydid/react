/** @jest-environment jsdom */

import { fireEvent, render, screen } from "@testing-library/react";
import { Hooks } from "../../src/Hooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('test on <Hooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    //we want that every function we are mocking
    //being executed in the initial state.
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('must show the default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            error: false
        })

        render(<Hooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Universe of Ice and Fire'));

    });

    test('should show a quote', () => {

        useFetch.mockReturnValue({
            data: { name: 'House Appleton', coatOfArms: 'Royal crown with mapple leafs' },
            isLoading: false,
            error: null
        });
        render(<Hooks />);

        expect(screen.getByText('House Appleton')).toBeTruthy();
        expect(screen.getByText('Royal crown with mapple leafs')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('should call the increment function', () => {

        useFetch.mockReturnValue({
            data: { name: 'House Appleton', coatOfArms: 'Royal crown with mapple leafs' },
            isLoading: false,
            error: null
        });

        render(<Hooks />);

        const nextButton = screen.getByRole('button', { name: 'Next' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    })
});