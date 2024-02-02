/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { MainPage } from "../../src/useContext/MainPage";
import { MemoryRouter } from "react-router-dom";

describe('tests on <MainPage />', () => {

    test('home page must be rendered', () => {

        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Home Page')).toBeTruthy();
    });

    test('login page must be rendered', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Login Page')).toBeTruthy();
    });
})