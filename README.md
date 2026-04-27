# Chris Bradshaw CV

A professional CV website built with Next.js, React, and Tailwind CSS. Features include:

- **Multi-format display**: View as web page, PDF, or print
- **Dynamic tabs**: Switch between full CV, executive summary, and cover letter
- **Markdown-based content**: Easy to maintain and update
- **Print-optimized**: Professional formatting for PDF export
- **Responsive design**: Works on desktop, tablet, and mobile

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16.2.4
- **UI Library**: [React](https://react.dev) 19.2.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4
- **Markdown**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **Language**: TypeScript 5

## Project Structure

```
.
├── app/                  # Next.js app directory
│   ├── page.tsx         # Main CV page
│   └── layout.tsx       # Root layout
├── components/          # React components
│   ├── CVTabs.tsx      # Tab navigation
│   ├── DownloadButton.tsx
│   ├── Header.tsx      # Header with title
│   └── MarkdownRenderer.tsx
├── content/            # Markdown content files
│   ├── cv.md          # Full CV
│   ├── summary.md     # Executive summary
│   └── cover.md       # Cover letter
├── lib/               # Utility functions
│   └── markdown.ts    # Markdown loading
├── public/            # Static assets
├── styles/            # Global CSS
└── tailwind.config.ts # Tailwind configuration
```

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start dev server (default port 3002)
npm run dev

# Or with custom port
PORT=3001 npm run dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Content Management

All content is stored as Markdown files in `/content`:

- **`cv.md`**: Full curriculum vitae
- **`summary.md`**: Executive summary for quick reference
- **`cover.md`**: Cover letter template

Edit these files to update your CV content. Changes will be reflected on the site automatically in development mode.

## Features

- **Download as PDF**: Export CV or any tab as PDF using browser print dialog
- **Tab Navigation**: Switch between different CV formats
- **Print Optimization**: Special CSS rules for clean PDF output
- **Dark Mode Ready**: Tailwind dark mode support
- **TypeScript**: Full type safety throughout the codebase

## Development Notes

- Built with Next.js 16 App Router
- No external API calls (all content is local)
- Fully static site generation
- ESLint configuration for code quality

## Deployment

This is a static Next.js site that can be deployed to any platform supporting Node.js or static hosting:

- **Vercel** (recommended): Push to GitHub, auto-deploy
- **Netlify**: Connect GitHub repo
- **Self-hosted**: Build and run with `npm start`

See `DEPLOYMENT.md` for detailed instructions.

## License

Private project. All rights reserved.
