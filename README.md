# DattaPay Frontend

A modern React + TypeScript + Vite application for DattaPay - a fintech platform for freelancers and creators.

## Features

- 🚀 Built with React 19, TypeScript, and Vite
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 📱 Responsive design
- 🎯 Type-safe with TypeScript
- 🔄 Client-side routing with Wouter
- 📊 Data visualization with Recharts

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Automatic Deployment

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect the settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend` (if deploying from root) or leave blank if deploying from frontend folder
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Option 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd frontend
vercel
```

### Important Notes for Vercel

- Make sure `vercel.json` is in the root directory if deploying from the root
- The SPA routing is handled by the rewrites in `vercel.json`
- All routes will serve `index.html` for client-side routing

## Project Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── lib/            # Utilities and configurations
│   ├── hooks/          # Custom React hooks
│   └── assets/         # Static assets
├── public/             # Public assets
├── dist/               # Build output (generated)
├── package.json
├── tsconfig.json
├── vite.config.js
└── vercel.json
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Wouter** - Client-side routing
- **React Query** - Data fetching
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Recharts** - Charts and graphs
- **Radix UI** - Accessible component primitives

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

© 2025 DattaPay Inc. All rights reserved.
