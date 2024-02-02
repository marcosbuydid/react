/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { TaskManager } from "../../src/useReducer/TaskManager";
import { useTask } from "../../src/hooks/useTask";
import { AddTask } from "../../src/useReducer/AddTask";

jest.mock('../../src/hooks/useTask')

describe('Tests on <TaskManager />', () => {

    const taskOne = {
        id: new Date().getTime(),
        description: 'Task one description',
        date: new Date().toUTCString(),
        done: false,
    };

    const taskTwo = {
        id: new Date().getTime() + 8,
        description: 'Task two description',
        date: new Date().toUTCString(),
        done: true,
    };

    useTask.mockReturnValue({
        tasks: [taskOne, taskTwo],
        handleNewTask: jest.fn(),
        handleTaskRemoval: jest.fn(),
        handleTaskDone: jest.fn(),
        tasksQuantity: 2,
        tasksNotFinished: 1
    });

    test('component must be showed correctly', () => {
        render(
            <TaskManager />,
            <AddTask />
        );

        expect(screen.getByText('Task one description')).toBeTruthy();
        expect(screen.getByText('Task two description')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })

})