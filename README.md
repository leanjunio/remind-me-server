# Remind Me (Server)

[![Deploy to Amazon ECS](https://github.com/leanjunio/remind-me-server/actions/workflows/deploy_server.yml/badge.svg)](https://github.com/leanjunio/remind-me-server/actions/workflows/deploy_server.yml)

## Description

This project is the backend for the overall project of Remind Me. Remind me is an application that allows users to schedule text reminders to themselves. This is meant to be a toy project.

[Link to ECS instance](http://ec2-3-19-32-82.us-east-2.compute.amazonaws.com:4000/)

## Prerequisites

- Node.js
- NPM

## Installation

```bash
~$ gh repo clone leanjunio/remind-me-server
~$ cd remind-me-server
~$ npm install
```

### Running on development

```bash
~$ npm run dev:start
```

### Running on production

```bash
~$ npm start
```

### The project uses Docker Compose as well

```bash
~$ docker-compose -f docker-compose.dev.yml
```
