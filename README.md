# Portfolio V1

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Single-page portfolio sections: Intro, About, Skills, Experience, Projects, and Contact
- Dark/light theme toggle
- Smooth scrolling and animated UI interactions
- Contact form with server action + Resend email delivery
- SEO-ready metadata, sitemap, robots, and structured data
- Vercel Analytics integration

## Tech Stack

- Next.js 13 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- React Email + Resend
- React Hot Toast

## Project Structure

```text
app/          # App Router pages, layout, metadata, sitemap, robots
components/   # UI sections and reusable components
actions/      # Server actions (e.g., contact email)
context/      # React context providers
email/        # Email templates used by Resend
lib/          # Data, hooks, utility functions, shared types
public/       # Static assets (images, resume)
metadata/     # Metadata helpers
```

## Getting Started

### 1. Install dependencies

Use one package manager only:

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
bun install
```

### 2. Configure environment variables

Create `.env.local` in the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 3. Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run lint checks

## Contact Form Setup (Resend)

The contact form uses the server action in `actions/sendEmail.ts`.

Update these values for your own account/domain:

- `from` email address
- `to` recipient address

## Deployment

This project is ready to deploy on Vercel.

Basic deploy flow:

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Add `RESEND_API_KEY` in Vercel Project Settings -> Environment Variables.
4. Deploy.

## Notes

- Do not commit real API keys to Git.
- If any key was previously committed, rotate/regenerate it immediately.

## License

This project is for personal portfolio use.
