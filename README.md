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

# Frontend Setup

Navigate to the frontend directory:

cd ../front-end-app

Install the dependencies:

npm install

Start the Next.js development server:

npm run dev

The frontend will be accessible at http://localhost:3001.




# Backend API Endpoints

1. Campaign Management

Create a Campaign

Endpoint: POST /campaigns

Description: Create a new campaign.

Request Body:

'''json
{
  "title": "Campaign Title",
  "status": "ongoing",
  "deadline": "2025-01-31T00:00:00Z",
  "instructions": "Instructions for the campaign",
  "brandId": "63e2d3c01a27b7e29134f7c8"
}

Fetch All Campaigns

Endpoint: GET /campaigns

Description: Fetch a list of all campaigns.

Fetch Campaigns Joined by an Influencer

Endpoint: GET /campaigns/influencer/:influencerId

Description: Fetch campaigns an influencer has joined.

Fetch Performance Metrics for a Campaign

Endpoint: GET /campaigns/performance/:influencerId

Description: Get performance metrics for campaigns.

2. Influencer Management

Register an Influencer

Endpoint: POST /influencers

Description: Register a new influencer.

Request Body:

'''json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890"
}

Fetch Influencers in a Campaign

Endpoint: GET /campaigns/influencer/:campaignId

Description: Get a list of influencers who joined a specific campaign.

3. Post Management

Fetch Posts by Influencer and Campaign

Endpoint: GET /posts/:influencerId/campaign/:campaignId

Description: Fetch all posts for a specific influencer and campaign.

Create a Post

Endpoint: POST /posts/create

Description: Create a new post for an influencer and campaign.

Request Body:

'''json
{
  "influencerId": "63e2d3c01a27b7e29134f7c8",
  "campaignId": "63e2d3c01a27b7e29134f7c8",
  "content": "This is a post content."
}

Update Engagement Metrics for a Post

Endpoint: PUT /posts/update/:postId

Description: Update likes, shares, and comments for a post.

Request Body:

