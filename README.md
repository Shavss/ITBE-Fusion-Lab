# ITBE-Fusion-Lab

A full-stack web application developed as part of the MSc Information Technologies for the Built Environment (ITBE) programme at TU Munich. The project explores the integration of BIM data workflows with a modern web interface, featuring a React + Vite frontend, an Express/Node.js backend, and a MongoDB Atlas database — all containerised with Docker and deployed on Azure.

Video: https://vimeo.com/1175405454?share=copy&fl=sv&fe=ci

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, Vite, Nginx               |
| Backend    | Node.js, Express 4, Body-Parser     |
| Database   | MongoDB Atlas (via Mongoose 8)      |
| Container  | Docker, Docker Compose              |
| Hosting    | Azure Web Apps (Germany West)       |

---

## Project Structure

```
ITBE-Fusion-Lab/
├── backend/                  # Express API server
│   ├── config/               # DB and environment configuration
│   ├── models/               # Mongoose data models
│   ├── routes/               # API routes (auth, contact, dashboard, maintenance)
│   ├── server.js             # Entry point
│   └── Dockerfile
├── test-project/             # React + Vite frontend
│   ├── src/                  # Components, pages, and assets
│   ├── public/
│   ├── nginx.conf            # Nginx config for production serving
│   └── Dockerfile
├── docker-compose.yml        # Multi-service orchestration
├── index.html                # Root HTML
└── app.js                    # Top-level app entry
```

---

## API Routes

The backend exposes the following REST endpoints under `/api`:

- `POST /api/contact` — Contact form submission
- `POST|GET /api/auth` — User authentication (register/login)
- `GET /api/dashboard` — Dashboard data
- `GET|POST /api/maintenance` — Maintenance records

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/) and Docker Compose
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster URI

### Running Locally with Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/Shavss/ITBE-Fusion-Lab.git
   cd ITBE-Fusion-Lab
   ```

2. Create a `.env` file inside `backend/` with your MongoDB URI:

   ```env
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=5001
   ```

3. Start all services:

   ```bash
   docker compose up --build
   ```

   The frontend will be available at `http://localhost:5001` and the backend API at `http://localhost:5001/api`.

### Running the Backend Manually

```bash
cd backend
npm install
node server.js
```

### Running the Frontend Manually

```bash
cd test-project
npm install
npm run dev
```

---

## Environment Variables

| Variable           | Location         | Description                        |
|--------------------|------------------|------------------------------------|
| `MONGO_URI`        | `backend/.env`   | MongoDB Atlas connection string    |
| `PORT`             | `backend/.env`   | Backend server port (default 5001) |
| `VITE_API_BASE_URL`| Docker build arg | Public frontend URL                |
| `VITE_BACKEND_URL` | Docker build arg | Public backend API URL             |

---

## Deployment

The application is deployed on **Azure Web Apps** in the Germany West Central region:

- **Frontend:** `https://paketvision-d7bfakgjd3fgazfs.germanywestcentral-01.azurewebsites.net`
- **Backend:** `https://fusionlab2-d0fddybseka5awea.germanywestcentral-01.azurewebsites.net`

Both services are built as Docker containers and pushed to Azure Container Registry before deployment.

---

## License

This project is licensed under the ISC License. See [LICENSE](./LICENSE) for details.

---

## Author

**Kacper** — MSc ITBE, Technical University of Munich  
[GitHub Profile](https://github.com/Shavss)
