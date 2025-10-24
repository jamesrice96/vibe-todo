'use client';

import { useState, useEffect } from 'react';
import type { Todo, TodoFormData } from '../types/todo';

const STORAGE_KEY = 'vibe-todos';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      try {
        const parsed = JSON.parse(storedTodos);
        const todosWithDates = parsed.map((todo: Todo) => ({
          ...todo,
          completionDate: new Date(todo.completionDate),
          createdAt: new Date(todo.createdAt),
        }));
        setTodos(todosWithDates);
      } catch (error) {
        console.error('Failed to parse todos from localStorage:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (formData: TodoFormData) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      completionDate: formData.completionDate,
      createdAt: new Date(),
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodoComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    isLoaded,
    addTodo,
    toggleTodoComplete,
    deleteTodo,
  };
}
