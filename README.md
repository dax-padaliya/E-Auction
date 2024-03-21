# FSD-PROJECT
# E-Auction System

## Overview
The E-Auction System is a web-based platform designed for conducting online auctions. It allows users to view auction items, place bids, add items for auction, and manage their auction listings. The system provides real-time bidding capabilities and facilitates online payments for successful bids.

--> Technologies Used
- Spring Framework (Java)
- React.js (JavaScript)
- MySQL (Database)
- SMTP for email notifications

## Features
1. User Authentication : Users can sign up, log in, and manage their accounts.
2. View Auction Items	: Users can browse through available auction items.
3. Bid on Items	: Registered users can place bids on auction items.
4. Add Auction Items	: Sellers can add new items for auction, specifying starting price, duration, and description.
5. Manage Auction Listings	: Sellers can view all bids on their items and choose to sell an item to the highest bidder.
6. Real-Time Updates	: Bidders receive instant updates on bid status.
7. Email Notifications	: Sellers and buyers receive email notifications for successful bids, item sales, and payment confirmations.
8. Secure Online Payments	: Buyers can make payments securely online for items they have won.

## Setup Instructions
1. **Backend Setup**:
    - Clone the repository.
    - Navigate to the backend directory.
    - Configure the MySQL database settings in `application.properties`.
    - Run the Spring Boot application.

2. **Frontend Setup**:
    - Navigate to the frontend directory.
    - Install dependencies using `npm install`.
    - Start the React development server using `npm start`.

3. **Database Setup**:
    - Create a MySQL database.
    - Run the SQL scripts provided in the `database_scripts` directory to set up the necessary tables.

4. **SMTP Configuration**:
    - Configure SMTP settings in `application.properties` to enable email notifications.

5. **Environment Variables**:
    - Set up any necessary environment variables for sensitive information such as database credentials and SMTP configurations.

## Usage
- Access the application through the provided URL.
- Register for an account or log in if you already have one.
- Explore available auction items, place bids, or add items for auction if you're a seller.
- Sellers can monitor bids on their items and choose to sell to the highest bidder.
- Buyers receive email notifications for successful bids and payment instructions.
- Payments can be made securely online.

## Contributors
- Padaliya Dax 

## Contact
For any inquiries or support, please contact daxpadaliya46@gmail.com.
