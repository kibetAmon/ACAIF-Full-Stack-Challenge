# ACAIF-Full-Stack-Challenge
## Project title: Campaign submission tracker
### This project is a comprehensive Influencer Campaign Management System built with NestJS (for the backend) and React/Next.js (for the frontend). It provides functionality for creating and managing campaigns, influencers, and their performance metrics.

## Features:

1. Campaign Management

Create, list, and fetch campaigns.

View campaigns joined by influencers.

Performance metrics for campaigns.

2. Influencer Management

Register influencers.

Fetch influencers who joined campaigns.

3. Performance Monitoring

Track metrics like posts submitted, posting dates, engagement estimates (likes, shares, comments).

4 Front-end Integration

A React/Next.js front-end for viewing and interacting with campaigns and influencers.


## Setting Up the Project

Prerequisites:

1. Node.js (v16 or higher)

2. MongoDB (running locally or on a cloud service like MongoDB Atlas)

3. Yarn or npm

Backend Setup

Clone the repository and navigate to the backend directory:

git clone <repository-url>
cd acaif_full-stack

Install the dependencies:

npm install

Create a .env file in the backend directory with the following variables:

MONGO_URI=mongodb://localhost:27017/campaign_submission
PORT=3000

Run the backend:

npm run start:dev

The backend API will be accessible at http://localhost:3000.

