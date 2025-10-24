'use client';

import { formatDistanceToNow, isPast, differenceInDays } from 'date-fns';
import { Trash2, Calendar, Clock } from 'lucide-react';
import type { Todo } from '../types/todo';
import { Card, CardContent } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggleComplete, onDelete }: TodoItemProps) {
  const daysUntilDue = differenceInDays(todo.completionDate, new Date());
  const isOverdue = isPast(todo.completionDate) && !todo.isCompleted;
  const isDueSoon = daysUntilDue <= 3 && daysUntilDue >= 0 && !todo.isCompleted;

  const getTimeLeftText = () => {
    if (todo.isCompleted) {
      return 'Completed';
    }
    if (isOverdue) {
      return `Overdue by ${formatDistanceToNow(todo.completionDate)}`;
    }
    return `Due ${formatDistanceToNow(todo.completionDate, { addSuffix: true })}`;
  };

  const getStatusColor = () => {
    if (todo.isCompleted) return 'text-green-600 dark:text-green-400';
    if (isOverdue) return 'text-red-600 dark:text-red-400';
    if (isDueSoon) return 'text-orange-600 dark:text-orange-400';
    return 'text-blue-600 dark:text-blue-400';
  };

  return (
    <Card
      className={`transition-all duration-200 hover:shadow-md ${
        todo.isCompleted ? 'opacity-75 bg-muted' : ''
      } ${isOverdue ? 'border-red-300 dark:border-red-800' : ''} ${
        isDueSoon ? 'border-orange-300 dark:border-orange-800' : ''
      }`}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Checkbox
            checked={todo.isCompleted}
            onCheckedChange={() => onToggleComplete(todo.id)}
            className="mt-1"
            aria-label={`Mark ${todo.title} as ${todo.isCompleted ? 'incomplete' : 'complete'}`}
          />

          <div className="flex-1 space-y-2">
            <h3
              className={`text-lg font-semibold ${
                todo.isCompleted ? 'line-through text-muted-foreground' : ''
              }`}
            >
              {todo.title}
            </h3>

            {todo.description && (
              <p
                className={`text-sm ${
                  todo.isCompleted
                    ? 'text-muted-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {todo.description}
              </p>
            )}

            <div className="flex flex-wrap gap-3 text-sm">
              <div className={`flex items-center gap-1 ${getStatusColor()}`}>
                <Clock className="h-4 w-4" />
                <span className="font-medium">{getTimeLeftText()}</span>
              </div>

              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(todo.completionDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(todo.id)}
            className="text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
            aria-label={`Delete ${todo.title}`}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
