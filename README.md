# Library App — Backend API

A RESTful API for a social book-sharing app. Users can manage a personal book library and wishlist, connect with friends, and request to borrow each other's books.

**Live API:** https://hosting-api-yiyu.onrender.com/api
**Frontend:** https://github.com/Array-of-Sunshine-Library-App/library-app

---

## Tech Stack

- **Node.js** with **Express**
- **Firestore** (Firebase NoSQL database)
- Hosted on **Render**

---

## Features

- **Users** — create and retrieve user accounts
- **Book library** — add, view, and remove books from a personal collection; filter by lendable status
- **Wishlist** — maintain a list of books to acquire
- **Friends** — send, accept, and reject friend requests; manage a friends list
- **Borrowing/Lending** — request to borrow a friend's book, accept requests, track active loans, and return books

---

## Getting Started

### Prerequisites
- Node.js 18+
- A Firebase project with Firestore enabled
- A Firebase service account key

### Environment Variables

| Variable | Description |
|---|---|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase service account JSON (stringified) |
| `PORT` | Port to listen on (defaults to 3000) |

### Running Locally

```bash
cd functions
npm install
npm start
```

---

## API Documentation

All endpoints are documented at:

```
GET /api/endpoints
```

### Endpoint Groups

| Prefix | Description |
|---|---|
| `/api/users` | User management |
| `/api/users/:username/books` | Personal book library |
| `/api/users/:username/wishlist` | Wishlist |
| `/api/users/:username/friends` | Friends system |
| `/api/users/:username/friendrequests` | Friend requests |
| `/api/users/:borrower/books/:bookid/requestlend/:owner` | Borrow requests |
| `/api/users/:owner/lending` | Active loans (lender view) |
| `/api/users/:borrower/borrowing` | Active loans (borrower view) |
