# Next.js Docker Deployment

This project shows how to run a **Next.js application using Docker** and deploy it on a **cloud server (AWS EC2)** with a basic **GitHub Actions CI workflow**.

---

## Tech Used

* Next.js
* Docker
* GitHub Actions
* AWS EC2 (Ubuntu)

---

## What This Project Does

* Builds a Next.js app
* Runs it inside a Docker container
* Uses GitHub Actions to automatically build on every push
* Deploys and runs the app on an EC2 instance

---

## Run Locally with Docker

Build the image:

```bash
docker build -t next-cloud-demo .
```

Run the container:

```bash
docker run -p 3000:3000 next-cloud-demo
```

Open:

```
http://localhost:3000
```

---

## GitHub Actions

A CI pipeline is set up to:

* Trigger on push to `main`
* Build the Docker image automatically

Workflow file:

```
.github/workflows/ci.yml
```

---

## Cloud Deployment

On the EC2 server:

```bash
docker run -d -p 3000:3000 next-cloud-demo
```

Access the app:

```
http://<EC2_PUBLIC_IP>:3000
```

---

## Purpose

This project is a **learning demo** to understand:

* Docker basics
* CI with GitHub Actions
* Cloud deployment using EC2

---

## Author

Shankar
