/** @jest-environment jsdom */

import { taskManagerReducer } from "../../src/useReducer/TaskManagerReducer";

describe('test on TaskManagerReducer', () => {

    const initialTasks = [{
        id: 1,
        task: 'sample task',
        done: false,
    }];

    test('must return the initial tasks', () => {
        const newTasks = taskManagerReducer(initialTasks, {});
        expect(newTasks).toBe(initialTasks);
    })

    test('must add a new task', () => {
        const action = {
            type: 'Add Task',
            payload: {
                id: 2,
                task: 'buy plane tickets',
                done: false
            }
        };

        const newTasks = taskManagerReducer(initialTasks, action);
        expect(newTasks.length).toBe(2);
        expect(newTasks).toContain(action.payload);
    })

    test('must delete a task', () => {
        const action = {
            type: 'Delete Task',
            payload: {
                id: 2,
            }
        };

        const newTasks = taskManagerReducer(initialTasks, action);
        expect(newTasks.length).toBe(1);
    })

    test('must mark a task as done', () => {
        const action = {
            type: 'Finish Task',
            payload: 1
        };

        const newTasks = taskManagerReducer(initialTasks, action);
        expect(newTasks[0].done).toBe(true);
    })
})