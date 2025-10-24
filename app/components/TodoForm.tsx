'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { todoFormSchema, type TodoFormSchema } from '../helpers/todoSchema';
import type { TodoFormData } from '../types/todo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface TodoFormProps {
  onSubmit: (data: TodoFormData) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<TodoFormSchema>({
    resolver: zodResolver(todoFormSchema),
  });

  const completionDate = watch('completionDate');

  const onFormSubmit = (data: TodoFormSchema) => {
    onSubmit(data);
    reset();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create New Todo</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder="Enter todo title"
              {...register('title')}
              aria-invalid={errors.title ? 'true' : 'false'}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Enter description (optional)"
              {...register('description')}
              aria-invalid={errors.description ? 'true' : 'false'}
            />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Completion Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                  type="button"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {completionDate ? (
                    format(completionDate, 'PPP')
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={completionDate}
                  onSelect={(date) => date && setValue('completionDate', date)}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.completionDate && (
              <p className="text-sm text-red-500">
                {errors.completionDate.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Add Todo
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
