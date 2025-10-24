"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { CheckCircle2 } from "lucide-react";
import { useTodos } from "./hooks/useTodos";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export default function Home() {
  const { todos, isLoaded, addTodo, toggleTodoComplete, deleteTodo } =
    useTodos();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleToggleComplete = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (todo && !todo.isCompleted) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
    toggleTodoComplete(id);
  };

  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const totalCount = todos.length;

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {showConfetti && (
        <Confetti recycle={false} numberOfPieces={500} gravity={0.3} />
      )}

      <main className="container mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">Vibe Todo</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Organize your tasks and achieve your goals
          </p>
          {totalCount > 0 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>
                Progress: {completedCount} of {totalCount} completed
              </span>
              <div className="h-2 w-32 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${(completedCount / totalCount) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <TodoForm onSubmit={addTodo} />
          </div>

          <div className="space-y-6">
            <TodoList
              todos={todos}
              onToggleComplete={handleToggleComplete}
              onDelete={deleteTodo}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
