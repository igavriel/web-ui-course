# Deploying a Static-Site Monorepo to Vercel

Guide for deploying **multiple static sites** from a single Git repository as separate Vercel projects.

## How It Works

Vercel maps **one project → one root directory**. To deploy N sites from one repo, you create N separate Vercel projects, each pointing at its own subdirectory.

```
repo-root/
├── site-a/          ← Vercel project 1 (root directory = site-a)
│   └── index.html
├── site-b/          ← Vercel project 2 (root directory = site-b)
│   └── index.html
└── ...
```

### Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier works fine)
- The repo pushed to a Git provider (GitHub, GitLab, or Bitbucket)

---

## Option A — Via the Vercel Dashboard (no CLI needed)

Repeat the steps below **once per site** you want to deploy.

1. Go to [vercel.com/new](https://vercel.com/new).
2. Click **Import** next to your repository.
3. On the **Configure Project** screen:
   - **Project Name** — give it a distinct name (e.g. `my-site-a`, `my-site-b`).
   - **Root Directory** — click **Edit** and set it to the subdirectory for this site (e.g. `site-a`).
   - **Framework Preset** — select **Other** (plain static site, no framework).
   - Leave **Build Command** and **Output Directory** blank (Vercel serves the root directory as-is for static sites).
4. Click **Deploy**.
5. After the build finishes, Vercel gives you a `*.vercel.app` URL. Optionally add a custom domain under **Project → Settings → Domains**.

> **Tip:** When you import the same repo again for the next site, Vercel will ask you to create a new project — that's exactly what you want.

---

## Option B — Via the Vercel CLI

### 1. Install the CLI

```bash
npm i -g vercel
```

### 2. Authenticate

```bash
vercel login
```

### 3. Deploy each site

`cd` into a site's subdirectory and run:

```bash
cd site-a
vercel --yes
```

When prompted:
- **Set up and deploy?** → `Y`
- **Which scope?** → pick your Vercel account / team
- **Link to existing project?** → `N` (create new)
- **Project name** → choose a unique name for this site
- **In which directory is your code located?** → `./` (you're already in the subdirectory)
- **Override settings?** → `N`

Promote to production:

```bash
vercel --prod
```

Repeat for every other site:

```bash
cd ../site-b
vercel --yes
vercel --prod
```

### 4. Verify

```bash
vercel ls          # lists your projects with their URLs
```

---

## Automatic Deployments (CI/CD)

Once all projects exist on Vercel and are linked to the Git repo, every push to the default branch triggers deployments automatically. Vercel detects which root directory changed and only rebuilds the affected project(s).

To inspect or change this behavior: **Project → Settings → Git**.

---

## Custom Domains

For each project, go to **Project → Settings → Domains** and add your domain. Vercel handles TLS certificates automatically.

---

## Tear-Down / Unlinking

```bash
# Remove a project entirely
vercel project rm <project-name>

# Or just unlink the local directory from Vercel (keeps the project online)
vercel unlink
```
