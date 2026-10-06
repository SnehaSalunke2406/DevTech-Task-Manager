# DevTech Task Manager

A Mini Task Management Web Application developed as part of the DevTech Full Stack Development Internship Ability Assessment.

## Live Demo

https://devtech-task-manager-5.onrender.com

## GitHub Repository

https://github.com/SnehaSalunke2406/DevTech-Task-Manager

## Features

- Create new tasks
- View all tasks
- View individual tasks
- Update existing tasks
- Delete tasks
- Set task priority
- Set task status
- Search tasks by title
- Form validation and error handling
- Responsive user interface

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Deployment
- Render

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a single task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Task Fields

Each task contains:

- `title`
- `description`
- `status`
- `priority`
- `createdAt`
- `updatedAt`

### Status Options

- Pending
- In Progress
- Completed

### Priority Options

- Low
- Medium
- High

## Database Schema

The application uses MongoDB with Mongoose.

```text
Task
 ├── _id
 ├── title
 ├── description
 ├── status
 ├── priority
 ├── createdAt
 └── updatedAt
