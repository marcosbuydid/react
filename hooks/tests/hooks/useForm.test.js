/** @jest-environment jsdom */

import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm';

describe('Tests on useForm.js', () => {

    const initialForm = {
        name: 'Marcos',
        email: 'mail@marcos.com'
    }

    test('must return the default value', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            formObject: initialForm,
            formState: result.current.formState,
            onInputChange: expect.any(Function),
            clearForm: expect.any(Function)
        })
    });

    test('name on the form must change', () => {
        const newName = 'Nick';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newName } })
        });
        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);
    });

    test('form must be reset', () => {
        const newName = 'Nick';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, clearForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newName } })
            clearForm();
        });
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});