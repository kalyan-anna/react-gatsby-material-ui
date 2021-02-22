/* eslint-disable max-lines-per-function */
import { FilterState, filterReducer } from '@state/filter';
import { PriorityEnum, Todo, TodoStatusEnum, TodosState } from './types';
import { advanceTo, clear } from 'jest-date-mock';

import { addTodoItem } from './actions';
import { eventReducer } from './reducer';
import { todosSelectors } from './selectors';
import uniqueId from 'lodash/uniqueId';

jest.mock('lodash/uniqueId');
const mockedUniqueId = uniqueId as jest.Mock;

describe('todosSelectors', () => {
  beforeAll(() => {
    advanceTo(new Date(2020, 11, 27, 0, 0, 0));
  });

  afterAll(() => {
    clear();
  });

  beforeEach(() => {
    mockedUniqueId.mockReturnValue('1');
  });

  describe('selectAllTodos', () => {
    test('should return empty array when no items added', () => {
      const nextTodosState = eventReducer(undefined, { type: 'Unknown' });
      const nextFilterState = filterReducer(undefined, { type: 'Unknown' });
      const result = todosSelectors.selectAllTodos({
        todos: nextTodosState,
        filter: nextFilterState,
      });

      expect(result).toHaveLength(0);
    });

    test('should return all todo items as an array', () => {
      const rootTodosState = {
        todoMap: createTodoMapData([
          { title: 'By milk' },
          { title: 'Run 2km' },
        ]),
      } as TodosState;

      const rootFilterState = filterReducer(undefined, { type: 'Unknown' });

      const result = todosSelectors.selectAllTodos({
        todos: rootTodosState,
        filter: rootFilterState,
      });

      expect(result).toHaveLength(2);
    });

    describe('filter', () => {
      test('should filter by single priority selection', () => {
        const rootTodosState = {
          todoMap: createTodoMapData([
            { title: 'Buy milk', priority: PriorityEnum.MEDIUM },
            { title: 'Run 2km', priority: PriorityEnum.LOW },
            { title: 'Yoga', priority: PriorityEnum.HIGH },
          ]),
        } as TodosState;

        const rootFilterState = {
          filters: {
            priorities: [PriorityEnum.LOW],
          },
          sort: {},
        } as FilterState;

        const result = todosSelectors.selectAllTodos({
          todos: rootTodosState,
          filter: rootFilterState,
        });

        expect(result).toHaveLength(1);
        expect(result[0].priority).toEqual(PriorityEnum.LOW);
        expect(result[0].title).toEqual('Run 2km');
      });

      test('should filter by multiple priority selection', () => {
        const rootTodosState = {
          todoMap: createTodoMapData([
            { title: 'Buy milk', priority: PriorityEnum.MEDIUM },
            { title: 'Run 2km', priority: PriorityEnum.LOW },
            { title: 'Yoga', priority: PriorityEnum.HIGH },
          ]),
        } as TodosState;

        const rootFilterState = {
          filters: {
            priorities: [PriorityEnum.LOW, PriorityEnum.MEDIUM],
          },
          sort: {},
        } as FilterState;

        const result = todosSelectors.selectAllTodos({
          todos: rootTodosState,
          filter: rootFilterState,
        });

        expect(result).toHaveLength(2);
      });

      test('should filter by single status selection', () => {
        const rootTodosState = {
          todoMap: createTodoMapData([
            { title: 'Buy milk', status: TodoStatusEnum.Active },
            { title: 'Run 2km', status: TodoStatusEnum.Active },
            { title: 'Yoga', status: TodoStatusEnum.Completed },
          ]),
        } as TodosState;

        const rootFilterState = {
          filters: {
            status: [TodoStatusEnum.Completed],
          },
          sort: {},
        } as FilterState;

        const result = todosSelectors.selectAllTodos({
          todos: rootTodosState,
          filter: rootFilterState,
        });

        expect(result).toHaveLength(1);
        expect(result[0].status).toEqual(TodoStatusEnum.Completed);
        expect(result[0].title).toEqual('Yoga');
      });

      test('should filter by multiple status selection', () => {
        const rootTodosState = {
          todoMap: createTodoMapData([
            { title: 'Buy milk', status: TodoStatusEnum.Active },
            { title: 'Run 2km', status: TodoStatusEnum.Active },
            { title: 'Yoga', status: TodoStatusEnum.Completed },
          ]),
        } as TodosState;

        const rootFilterState = {
          filters: {
            status: [TodoStatusEnum.Completed, TodoStatusEnum.Active],
          },
          sort: {},
        } as FilterState;

        const result = todosSelectors.selectAllTodos({
          todos: rootTodosState,
          filter: rootFilterState,
        });

        expect(result).toHaveLength(3);
      });

      test('should filter by both status and priority selection', () => {
        const rootTodosState = {
          todoMap: createTodoMapData([
            {
              title: 'Buy milk',
              status: TodoStatusEnum.Active,
              priority: PriorityEnum.LOW,
            },
            {
              title: 'Run 2km',
              status: TodoStatusEnum.Active,
              priority: PriorityEnum.MEDIUM,
            },
            {
              title: 'Yoga',
              status: TodoStatusEnum.Completed,
              priority: PriorityEnum.HIGH,
            },
          ]),
        } as TodosState;

        const rootFilterState = {
          filters: {
            status: [TodoStatusEnum.Active],
            priorities: [PriorityEnum.MEDIUM],
          },
          sort: {},
        } as FilterState;

        const result = todosSelectors.selectAllTodos({
          todos: rootTodosState,
          filter: rootFilterState,
        });

        expect(result).toHaveLength(1);
        expect(result[0].title).toEqual('Run 2km');
      });
    });
  });
});

const createTodoMapData = (todos: Todo[]) => {
  const todoMap: { [key: string]: Todo } = {};
  todos.forEach((todo, index) => {
    mockedUniqueId.mockReturnValue(index);
    const newTodo = addTodoItem(todo).payload;
    todoMap[newTodo.id!] = {
      ...newTodo,
      status: todo.status || newTodo.status,
    };
  });
  return todoMap;
};
