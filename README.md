# NestJS + MongoDB REST API

A REST API built with [NestJS](https://nestjs.com/) and [MongoDB](https://www.mongodb.com/) (via Mongoose), demonstrating a modular architecture with Users and Posts resources

## Tech Stack

- **NestJS** — progressive Node.js framework
- **MongoDB** — database via Mongoose ODM (`@nestjs/mongoose`)
- **ConfigModule** — environment variable management
- **class-validator** — request body validation via DTOs

## Project Structure

```
src/
├── app.module.ts           # Root module (MongoDB connection, imports)
├── users/
│   ├── schemas/            # User Mongoose schema
│   ├── dto/                # CreateUserDto with validation
│   ├── users.controller.ts # POST /users, GET /users
│   ├── users.service.ts    # Business logic & DB operations
│   └── http/               # .http files for endpoint testing
└── posts/
    ├── schemas/            # Post Mongoose schema (with enums)
    ├── dto/                # CreatePostDto with validation
    ├── posts.controller.ts # POST /posts, GET /posts
    ├── posts.service.ts    # Business logic & DB operations
    └── http/               # .http files for endpoint testing
```

## API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/users` | Create a new user |
| `GET`  | `/users` | Get all users |

**Create User body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "secret"
}
```

### Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/posts` | Create a new post |
| `GET`  | `/posts` | Get all posts |

**Create Post body:**
```json
{
  "title": "My First Post",
  "postType": "post",
  "slug": "my-first-post",
  "status": "draft",
  "content": "Hello world",
  "authorId": "<userId>"
}
```

**Post types:** `post` | `page` | `story`

**Post statuses:** `draft` | `published` | `archived`

## Environment Variables

Create a `.env` file in the root:

```env
MONGODB_URI=mongodb://root:password@localhost:27017
```

## Docker

A `docker-compose.yml` is included to spin up MongoDB locally:

```bash
docker compose up -d
```

This starts a MongoDB 8.0 container (`nest-mongo-db`) on port `27017` with a persistent volume (`mongo-data`).

| Variable | Value |
|----------|-------|
| Username | `root` |
| Password | `password` |
| Port | `27017` |

## Setup

```bash
pnpm install
```

## Running the App

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Tests

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

## License

[MIT](https://github.com/nestjs/nest/blob/master/LICENSE)
