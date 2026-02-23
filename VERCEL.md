Vercel deployment instructions

1. Connect your GitHub repo to Vercel (https://vercel.com/new).
2. Ensure the **Root Directory** is the repository root (leave empty).
3. Build Command: `npm run build` (this is the default in `package.json`).
4. Output Directory: `dist` (explicit in `vercel.json`).

Environment variables (if you use the server):
- Add `OPENAI_API_KEY` in Vercel > Settings > Environment Variables.

Notes:
- This project has a static frontend build in `dist/`.
- If you need the Express `server/` to run on Vercel, convert endpoints into serverless functions or host the server separately and update the frontend API URL.

Deploy with CLI:

```bash
npx vercel --prod
```

Or trigger a redeploy from the Vercel dashboard after connecting the repo.
