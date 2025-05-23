# Medical Flashcard App

[![Deploy to GitHub Pages](https://github.com/eonkzar/flashcard-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/eonkzar/flashcard-app/actions/workflows/deploy.yml)

An interactive flashcard application for medical students and professionals, built with React, TypeScript, and Chakra UI.

Visit the live app: [https://eonkzar.github.io/flashcard-app/](https://eonkzar.github.io/flashcard-app/)

## Features

- Multiple medical categories (Cardiovascular, Respiratory, Endocrine, Multi System, Neurological)
- Interactive flashcards with questions and answers
- Detailed explanations with medical diagrams
- Dark/Light mode support
- Responsive design
- Progress tracking

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This app is automatically deployed to GitHub Pages using GitHub Actions. Any push to the main branch will trigger a new deployment.

To deploy manually:

1. Build the project:
```bash
npm run build
```

2. Push to GitHub:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

3. The GitHub Action will automatically deploy to GitHub Pages.

## Tech Stack

- React
- TypeScript
- Vite
- Chakra UI
- GitHub Actions (CI/CD)
