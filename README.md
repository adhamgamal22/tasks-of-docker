# 🐳 Docker Tasks - Visits Counter App

A simple Web application built with **Node.js**, **Express**, and **Redis**, fully containerized using **Docker** and **Docker Compose**.

## 🚀 Features
- **Node.js & Express**: Web server listening on port `8081`.
- **Redis**: In-memory data store to keep track of page visits.
- **Docker Compose**: Single-command environment orchestration.

---

## 🛠️ Prerequisites
- [Docker](https://www.docker.com/) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/) installed.

---

## ⚡ Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adhamgamal22/tasks-of-docker.git
   cd tasks-of-docker
Run the application:

Bash

docker-compose up --build
Access in Browser:
Open your browser and navigate to:

Plaintext

http://localhost:8081
Refresh the page to see the visit counter increment!

🧹 Stop the Containers
To stop and remove the running containers:

Bash
docker-compose down
