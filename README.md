# DACBY Tech Assignment

HackerNews is a full-stack Hacker News aggregator that scrapes the top stories from Y Combinator News and displays them ranked by points. Users can create an account and bookmark stories to read later.

---

# Project Structure

```txt
ycomb-scraper/
├── frontend/
└── backend/
```

---

# Tech Stack

## Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- Shadcn UI
- Axios

## Backend

- Node.js
- Express
- TypeScript
- MongoDB
- JWT Authentication
- bcrypt

---

# Local Setup

## 1. Clone Repository

```bash
git clone https://github.com/sagaryadav99/HackerNews.git
cd ycomb-scraper
```

---

# Backend Setup

## Go into backend folder

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Create `.env` file

Create a `.env` file inside `backend/`

```env
PORT=3000
DB_STRING=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run backend

```bash
npm run build
npm start
```

Backend will run on:

```txt
http://localhost:3000
```

---

# Frontend Setup

## Open new terminal

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Run frontend

```bash
npm run dev
```

Frontend will run on:

```txt
http://localhost:5173
```

---

# Available Scripts

## Backend

```bash
npm run build
```

Compiles TypeScript files.

```bash
npm start
```

Runs compiled backend.

```bash
npm run dev
```

Builds and starts backend.

---

## Frontend

```bash
npm run dev
```

Starts Vite development server.

```bash
npm run build
```

Builds frontend for production.

```bash
npm run preview
```

Previews production build.

---

# Environment Variables

## Backend `.env`

| Variable   | Description               |
| ---------- | ------------------------- |
| PORT       | Backend server port       |
| DB_STRING  | MongoDB connection string |
| JWT_SECRET | JWT secret                |

---

# Deployment

Frontend and backend are deployed separately.

- Backend deployed as one service
- Frontend deployed as another service

---

# Notes

- Backend scrapes Hacker News and stores stories in MongoDB.
- Stories are filtered to the last 24 hours and ranked by points.
- Frontend communicates with backend using Axios.
- Authentication is implemented using JWT.
- Bookmarks are tied to authenticated users.
