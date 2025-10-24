# Vibe Todo

A beautiful, production-ready todo application built with Next.js, featuring date tracking, localStorage persistence, and confetti celebrations.

## Features

- ✅ **Create, Complete & Delete Todos** - Full todo management with an intuitive interface
- 📅 **Date Tracking** - Set completion dates and see how much time you have left
- ⏰ **Smart Time Display** - Visual indicators for overdue, due soon, and upcoming tasks
- 💾 **LocalStorage Persistence** - Your todos are saved automatically
- 🎉 **Confetti Celebrations** - Celebrate your accomplishments when completing todos
- 📊 **Progress Tracking** - Visual progress bar showing completion percentage
- 🎨 **Beautiful UI** - Built with shadcn/ui components and Tailwind CSS
- 📱 **Responsive Design** - Works seamlessly on all screen sizes

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Form Validation**: [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Date Utilities**: [date-fns](https://date-fns.org)
- **Animations**: [react-confetti](https://www.npmjs.com/package/react-confetti)
- **Icons**: [Lucide React](https://lucide.dev)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vibe-todo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Project Structure

```
vibe-todo/
├── app/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── TodoForm.tsx # Form for creating todos
│   │   ├── TodoItem.tsx # Individual todo display
│   │   └── TodoList.tsx # List of todos
│   ├── helpers/
│   │   └── todoSchema.ts # Zod validation schema
│   ├── hooks/
│   │   └── useTodos.ts  # Custom hook for todo management
│   ├── types/
│   │   └── todo.ts      # TypeScript interfaces
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── lib/
│   └── utils.ts         # Utility functions
└── CLAUDE.md            # AI development guidelines
```

## Usage

### Creating a Todo

1. Enter a title (required)
2. Optionally add a description
3. Select a completion date using the calendar picker
4. Click "Add Todo"

### Managing Todos

- **Complete**: Click the checkbox next to a todo to mark it complete (triggers confetti! 🎉)
- **Delete**: Click the trash icon to remove a todo
- **View Status**: Color-coded time indicators show:
  - 🔴 Red: Overdue
  - 🟠 Orange: Due within 3 days
  - 🔵 Blue: More time available
  - 🟢 Green: Completed

## Development Guidelines

This project follows strict development guidelines defined in `CLAUDE.md`:

- Production-quality code with best practices
- TypeScript with no `any` types
- Custom hooks for reusable logic
- Proper form validation with Zod
- Modular and maintainable code structure
- Tailwind CSS for styling

## Build for Production

```bash
npm run build
npm run start
```

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/vibe-todo)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
