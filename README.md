# ITBE-Fusion-Lab

**Paketpost Areal Vision** is an interactive urban development showcase platform built as part of the MSc Information Technologies for the Built Environment (ITBE) programme at TU Munich. The application presents a mixed-use architectural masterplan for the Paketpost site in Munich — a large-scale urban regeneration project featuring two iconic twisted high-rise towers ("Harmony Towers"), public plazas, and sustainable green design. The platform serves as a digital front-end for the development, targeting property managers, business owners, and prospective renters.

The web application pairs a 3D IFC model viewer with rich editorial content, an interactive map, a news/blog section, and a contact and enquiry system. Users can explore the architectural design in real time directly in the browser, read about design concepts such as structural innovation, cultural identity, and green strategy, and get in touch with the development team. A protected dashboard with authentication allows administrators to manage property and maintenance records backed by MongoDB Atlas.

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

## Features

- **3D IFC Viewer** — explore the Paketpost Areal building model interactively in the browser
- **Design Concept Pages** — expandable sections covering design philosophy, structural system, cultural identity, and green strategy
- **User Group Pathways** — tailored onboarding flows for property managers, business owners, and renters
- **Blog / News** — latest project updates presented as editorial cards
- **Interactive Map** — geographic context view of the development site
- **Contact & Enquiry Form** — submissions stored in MongoDB via the Express API
- **Authentication & Dashboard** — login-protected admin dashboard for property and maintenance data management

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
│   ├── src/
│   │   ├── pages/            # Home, IFCViewerPage, MapPage, Blog, Dashboard, Login, Contact, FormPage
│   │   ├── components/       # Navbar, Viewer, FloatingButton, Expand, ScrollingText, etc.
│   │   ├── data/             # Static blog post data
│   │   └── styles/
│   ├── public/               # Static assets (images, renders, logo)
│   ├── nginx.conf            # Nginx config for production serving
│   └── Dockerfile
├── docker-compose.yml        # Multi-service orchestration
├── index.html
└── app.js
```

---

## Pages

| Route              | Description                                           |
|--------------------|-------------------------------------------------------|
| `/`                | Home — hero, design concept, user groups, news, footer |
| `/ifc-viewer`      | Interactive 3D IFC model viewer                       |
| `/map`             | Location and site map                                 |
| `/blog`            | News and project updates                              |
| `/blog/first-bakery` | First blog entry detail page                        |
| `/form`            | Enquiry / interest form                               |
| `/contact`         | Contact page                                          |
| `/login`           | Admin login                                           |
| `/dashboard`       | Protected admin dashboard                             |

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

   The app will be available at `http://localhost:5001`.

### Running Manually (without Docker)

**Backend:**
```bash
cd backend
npm install
node server.js
```

**Frontend:**
```bash
cd test-project
npm install
npm run dev
```

---

## Environment Variables

| Variable            | Location         | Description                        |
|---------------------|------------------|------------------------------------|
| `MONGO_URI`         | `backend/.env`   | MongoDB Atlas connection string    |
| `PORT`              | `backend/.env`   | Backend server port (default 5001) |
| `VITE_API_BASE_URL` | Docker build arg | Public frontend URL                |
| `VITE_BACKEND_URL`  | Docker build arg | Public backend API URL             |

---

## Deployment

The application is deployed on **Azure Web Apps** in the Germany West Central region:

- **Frontend:** `https://paketvision-d7bfakgjd3fgazfs.germanywestcentral-01.azurewebsites.net`
- **Backend API:** `https://fusionlab2-d0fddybseka5awea.germanywestcentral-01.azurewebsites.net`

Both services are containerised and served via Docker.

---

## Academic Context

This project was developed as part of the **MSc Information Technologies for the Built Environment** programme at the **Technical University of Munich (TUM)**. It demonstrates the integration of BIM workflows, 3D web visualisation (IFC), full-stack development, and cloud deployment within an architectural design context.

---

## License

This project is licensed under the ISC License. See [LICENSE](./LICENSE) for details.

---

## Author

**Kacper** — MSc ITBE, Technical University of Munich  
[GitHub Profile](https://github.com/Shavss)

