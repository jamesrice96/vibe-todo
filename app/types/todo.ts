export interface Todo {
  id: string;
  title: string;
  description?: string;
  completionDate: Date;
  createdAt: Date;
  isCompleted: boolean;
}

export interface TodoFormData {
  title: string;
  description?: string;
  completionDate: Date;
}
