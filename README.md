# Save your Markdown notes online with Atinotes 🖌️

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

Read more on https://notes.atinux.com

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fatinux%2Fatinotes%2Ftree%2Ffeat%2Fnuxthub-v1&env=ADMIN_PASSWORD,NUXT_SESSION_PASSWORD&envDescription=The%20password%20needed%20to%20edit%20notes.%20Generate%20a%20random%20string%20at%20least%2032%20characters%20long%20using%20%60openssl%20rand%20-hex%2032%60%20for%20the%20session%20password.&project-name=atinotes&repository-name=atinotes&demo-title=Atinotes&demo-description=An%20editable%20website%20powered%20by%20Markdown%20%26%20Vue%20components%20with%20dynamic%20OG%20image%20generation.%20%20Workers%20Paid&demo-url=https%3A%2F%2Fnotes.atinux.com%2F&demo-image=https%3A%2F%2Fassets.hub.nuxt.com%2FeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL25vdGVzLmF0aW51eC5jb20iLCJpYXQiOjE3MTA4NzM5MDN9.4OB91tp5bs_s_ZQ-6ybo_CkNmzE0XOTNKR_wzvkeO_E.jpg&products=%5B%7B%22type%22%3A%22integration%22%2C%22protocol%22%3A%22storage%22%2C%22group%22%3A%22redis%22%7D%5D)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/atinux/atinotes/tree/feat/nuxthub-v1)


## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

Copy the `.env.example` to `.env` and update the variables to your own.

## Production

Note that you need a [Nuxt UI Pro license](https://ui.nuxt.com/pro) to build the application for production.

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy

You can deploy this template on providers supported by Nitro. https://nitro.build/deploy

Set the following environement variables:

```
ADMIN_PASSWORD=<your-password>
NUXT_SESSION_PASSWORD=<a-32-characters-long-password>
```

If deploying to a provider which NuxtHub does not [automatically configure](https://v1.hub.nuxt.com/docs/features/kv#automatic-configuration) the KV storage driver for, then [manually configure the Nitro Storage KV mount](https://v1.hub.nuxt.com/docs/features/kv#manual-configuration).

That's all :sparkles:

## License

[MIT](./LICENSE) - Sébastien Chopin
