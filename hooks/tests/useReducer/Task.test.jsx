/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { Task } from "../../src/useReducer/Task";

describe('Test on <Task />', () => {

    const task = {
        id: new Date().getTime(),
        description: 'Sample description',
        date: new Date().toUTCString(),
        done: false,
    };

    //mock functions, also called spies
    const onDeleteTaskMock = jest.fn();
    const onTaskFinishedMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('must show all tasks', () => {

        render(
            <Task
                task={task}
                onDeleteTask={onDeleteTaskMock}
                onTaskFinished={onTaskFinishedMock}
            />
        )

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-end')

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('p-2 flex-grow-1 bd-highlight')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    })




})