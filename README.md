# Senior Engineer Portfolio

A mobile-first Next.js portfolio built with the App Router, Tailwind CSS v4, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The contact form sends email through Resend. Copy `.env.example` to `.env.local`, add a Resend API key, set the recipient address, and use a sender address verified with Resend before deploying. Without those values, the form shows a configuration message instead of claiming that a message was sent.

## Checks

```bash
npm run typecheck
npm run build
```