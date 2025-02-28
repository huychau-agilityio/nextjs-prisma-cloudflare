# Next.js + TailwindCSS + TypeScript + Prisma + Cloudflare D1

This is a modern web application stack using Next.js, TailwindCSS, TypeScript, Prisma, and Cloudflare D1 for database management. It is optimized for edge deployment on Cloudflare Pages.

🚀 Features

- Next.js: Server-side rendering, API routes, and static site generation.
- TailwindCSS: Utility-first CSS framework for rapid UI development.
- TypeScript: Strongly typed JavaScript for better developer experience.
= Prisma: Modern database ORM with type-safe queries.
- Cloudflare D1: Serverless SQL database for scalable applications.
- Edge Runtime: Optimized for Cloudflare Pages and Workers


## 🛠 Setup & Installation

### Install Dependencies
```
pnpm install
```

### Create Cloudflare D1 Database
```
npx wrangler d1 create sample-local-database
```

### Config `wrangler.toml` (create new if not already)
```
name = "nextjs-prisma-cloudflare"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"

[[d1_databases]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = "sample-local-database"
database_id = "sample-id"
migrations_dir = "./src/server/databases/migrations"
```

### Migrate database
```
pnpm db:migrate <database-name> --local
```

- --remote for cloud
- --local for local development

### Run local server
```
pnpm dev
```

## 🌍 Deployment (Cloudflare Pages)
This deployment does not push `wrangler.toml` to the repository.

You can create Cloudflare Page by connecting to your Git repository.


## Migrate database
*Note: This will manually for now. We need migrate for cloud environment use Terminal.*
```
pnpm db:migrate <database-name> --remote
```

## Build command
```
pnpm pages:build
```

## Binding Database

Settings -> Bindings -> Add -> D1 Database. Set name is `DB` and select your database name.


## 🔥 API Routes

`GET /api/v1/users`

Fetch all users from the database.

`POST /api/v1/users`

Create a new user.

Example Request Body:
```
{
  "name": "John Doe",
  "email": "john@example.com"
}
```