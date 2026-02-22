# Environment variables

Copy `.env.example` to `.env` and fill in your secret values. Do NOT commit your `.env` file to the repository.

On macOS / Linux:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

The project expects the following variables (example):

- `OPENAI_API_KEY` — your OpenAI key
- `PORT` — server port (default `5000`)

If you already accidentally committed secrets, you must remove them from the repository history (use `git rm --cached <file>` and consider `git filter-repo` or the BFG Repo-Cleaner to fully purge history).