/** @jest-environment jsdom */

import { fireEvent, render, screen } from "@testing-library/react";
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

    test('must show a task completed', () => {

        task.done = true;

        render(
            <Task
                task={task}
                onDeleteTask={onDeleteTaskMock}
                onTaskFinished={onTaskFinishedMock}
            />
        )

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('p-2 flex-grow-1 bd-highlight')

    })

    test('must tag a task as finished when mark as done button is pressed', () => {

        render(
            <Task
                task={task}
                onDeleteTask={onDeleteTaskMock}
                onTaskFinished={onTaskFinishedMock}
            />
        )

        const doneButton = screen.getByRole('button', { name: 'Mark as done' });
        fireEvent.click(doneButton);

        expect(onTaskFinishedMock).toHaveBeenCalledWith(task.id);
    })

    test('must delete a task when delete task button is pressed', () => {

        render(
            <Task
                task={task}
                onDeleteTask={onDeleteTaskMock}
                onTaskFinished={onTaskFinishedMock}
            />
        )

        const deleteButton = screen.getByRole('button', { name: 'Delete task' });
        fireEvent.click(deleteButton);

        expect(onDeleteTaskMock).toHaveBeenCalledWith(task.id);
    })
});