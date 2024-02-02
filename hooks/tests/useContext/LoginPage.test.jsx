/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/useContext/context/UserContext";
import { LoginPage } from "../../src/useContext/LoginPage";

describe('tests on <LoginPage />', () => {

    test('must show the component without the user details', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('must show the component with the user details', () => {

        const user = {
            id: 364757,
            name: 'Marcos Buydid',
            email: 'sample@marcos.com'
        }

        render(
            <UserContext.Provider value={{ user }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());

    });
});