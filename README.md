# TechSonix Website

This is the official website for TechSonix, Inc., built with Next.js and Tailwind CSS.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the root directory and add your Web3Forms access key:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

3. Run the development server:

```bash
npm dev
```

## Deployment

To deploy to GitHub Pages:

1. Update the `basePath` and `assetPrefix` in `next.config.js` to match your repository name.

2. Run the deploy command:

```bash
npm deploy
```

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Web3Forms API
- React Icons
