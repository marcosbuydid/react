/** @jest-environment jsdom */

import { act, renderHook } from '@testing-library/react'
import { useCounter } from "../../src/hooks/useCounter";

describe('Tests on useCounter.js', () => {

    test('counter must return the default value', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset, } = result.current;
        expect(counter).toBe(0);

        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('counter should return 90', () => {
        //choose 90 as a random value
        const { result } = renderHook(() => useCounter(90));
        const { counter } = result.current;
        expect(counter).toBe(90);
    });

    test('counter should increment in one value', () => {
        const { result } = renderHook(() => useCounter(70));
        const { increment } = result.current;
        act(() => {
            increment(1);
        });
        expect(result.current.counter).toBe(71);
    });

    test('counter should decrement in one value', () => {
        const { result } = renderHook(() => useCounter(70));
        const { decrement } = result.current;
        act(() => {
            decrement(1);
        });
        expect(result.current.counter).toBe(69);
    });

    test('counter should return the default value when reset is called', () => {
        const { result } = renderHook(() => useCounter(40));
        const { increment, reset } = result.current;
        act(() => {
            increment(4);
            reset();
        });
        expect(result.current.counter).toBe(40);
    });
});