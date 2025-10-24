'use client';

import { useMemo } from 'react';
import type { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';
import { Card, CardContent } from './ui/card';

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggleComplete, onDelete }: TodoListProps) {
  const { activeTodos, completedTodos } = useMemo(() => {
    const active = todos.filter((todo) => !todo.isCompleted);
    const completed = todos.filter((todo) => todo.isCompleted);
    return { activeTodos: active, completedTodos: completed };
  }, [todos]);

  if (todos.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            No todos yet. Create your first todo to get started!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {activeTodos.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">
            Active Todos ({activeTodos.length})
          </h2>
          <div className="space-y-3">
            {activeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">
            Completed ({completedTodos.length})
          </h2>
          <div className="space-y-3">
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
