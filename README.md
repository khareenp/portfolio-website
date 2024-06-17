# Portfolio Website

This is a personal portfolio website developed using React and CSS. The website showcases various aspects of my skills, interests, and professional journey. It includes components such as a contact form, a list of skills, a dynamic header with navigation links, a gallery, a home section with personal information, an interests section, a resume, and a footer.

## Deployment

## Table of Contents

- [Portfolio Website](#portfolio-website)
  - [Deployment](#deployment)
  - [Table of Contents](#table-of-contents)
  - [Components](#components)
    - [Header](#header)
    - [Contact](#contact)
    - [Skills](#skills)
    - [Gallery](#gallery)
    - [Home](#home)
    - [Interests](#interests)
    - [Resume](#resume)
    - [Footer](#footer)
  - [Server](#server)
    - [Overview](#overview)
    - [CRUD Routes](#crud-routes)

## Components

### Header
The Header component contains the navigation links for the website. It dynamically generates the links from an array of objects.

### Contact
The Contact component contains a contact form that allows users to send a message. The form includes fields for the user's name, email, and message.

### Skills
The Skills component fetches and displays a list of skills from a backend server. It also allows adding and deleting skills.

### Gallery
The Gallery component displays a grid of images related to personal interests and hobbies.

### Home
The Home component contains personal information about me, including a biography, interests, life philosophy, goals, fun facts, and contact information.

### Interests
The Interests component provides detailed information about my interests and hobbies, including sports, technology, travel, music, family time, and life philosophy.

### Resume
The Resume component showcases my professional journey, skills, work history, education, languages, references, and hobbies.

### Footer
The Footer component displays a footer with copyright information.

## Server

### Overview
The backend server is implemented using Express.js and handles CRUD operations for managing skills.
The local server must be running for doata to show even though the project is deployed on netlify. (skills page)

### CRUD Routes
GET /api/skills: Fetches all skills.
POST /api/skills: Adds a new skill.
PUT /api/skills/: Updates an existing skill by ID.
DELETE /api/skills/: Deletes a skill by ID.