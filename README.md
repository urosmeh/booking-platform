# Booking-Platform

This is a very simple booking platform built with React, ChakraUI, TypeScript, Vite and Redux RTK Query. It allows users to view a list of salons, filter them by category or search them by name. It also allows users to create bookings for salons. 

# Project Structure

The project is structured into two main sections: the client and the server.

## Client

The client-side of the application is built using Vite, React and TypeScript. This part of the application is responsible for displaying the UI to the users, including the list of salons and the booking interface.

#### Features

1. List of Salons
2. List of Categories
3. Salon Search
4. Salon Category filter
5. Salon Bookings
6. List of Bookings

#### Tech Stack

- React
- TypeScript
- Chakra UI
- Vite
- Redux RTK Query

---

## Server

The server-side of the application is built using json-server. It provides users, salons, categories and bookings endpoints that are reached from client-side.

#### Tech Stack

- json-server: A fake REST API.

## Getting Started

To get a local copy up and running, follow these simple steps:
1. Use node version 18

2. Clone the repository: `git clone https://github.com/urosmeh/booking-platform.git`

3. Navigate into the project directory: `cd booking-platform`

4. Install dependencies:
  - For the client: `cd client` and then `npm install`
  - For the server: `cd server` and then `npm install`

5. Run the application:
  - Go to root directory and run `npm start` to run client and server. 
  - Start only server: `cd server` and then `npm start`
  - Start only client: `cd client` and then `npm run dev`
