//Vercel expects serverless functions to be placed in the /api

import { createServer } from 'http';
import express from 'express';
import { default as app } from '../../backend/dist/main';  // Import the compiled NestJS app

module.exports = (req, res) => {
  // Create the HTTP server using NestJS application
  createServer(app).emit('request', req, res);
};
