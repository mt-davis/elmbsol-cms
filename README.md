# Elm Business Solutions CMS

This repository contains a Strapi 5 CMS prepared for the Elm Business Solutions marketing site at [elmbsol.vercel.app](https://elmbsol.vercel.app/).

## Included Content Model

- `site-setting` for company-wide contact and SEO details
- `home-page` for the homepage hero, messaging, and repeated content blocks
- `service` for the service cards and service details
- `partner-type` for target organization groups
- `approach-step` for the Define / Design / Deliver process
- `case-study` for featured modernization stories

## Local Development

1. Copy `.env.example` to `.env` if you need a fresh local environment.
2. Keep `DATABASE_CLIENT=sqlite` for local development unless you want to point the app at a Postgres instance.
3. Start the app:

```bash
npm run develop
```

The Strapi admin panel will be available at `http://localhost:1337/admin`.

## Railway Deployment

Create two Railway services:

1. A `Postgres` database service
2. A `Strapi` app service connected to this repository

Set these environment variables on Railway:

```bash
NODE_ENV=production
PUBLIC_URL=https://api.elmbsol.com
HOST=0.0.0.0
PORT=1337
IS_PROXIED=true
CORS_ORIGINS=https://elmbsol.vercel.app

APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
ENCRYPTION_KEY=...

DATABASE_CLIENT=postgres
DATABASE_URL=${{Postgres.DATABASE_URL}}
DATABASE_SSL=false
DATABASE_POOL_MIN=0
DATABASE_POOL_MAX=10

CLOUDINARY_NAME=...
CLOUDINARY_KEY=...
CLOUDINARY_SECRET=...
```

Recommended Railway settings:

- Build command: `npm run build`
- Start command: `npm run start`

## Media Storage

The app is configured to use Cloudinary automatically when `CLOUDINARY_NAME`, `CLOUDINARY_KEY`, and `CLOUDINARY_SECRET` are present. If those variables are missing, Strapi falls back to local uploads for development only.

## Frontend Integration

Point your Vercel frontend at the Railway-hosted Strapi API with a base URL such as:

```bash
NEXT_PUBLIC_STRAPI_URL=https://api.elmbsol.com
```

Then fetch:

- `/api/site-setting`
- `/api/home-page`
- `/api/services`
- `/api/partner-types`
- `/api/approach-steps`
- `/api/case-studies`
