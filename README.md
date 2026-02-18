# Library App — Backend API

A RESTful API for a social book-sharing app. Users can manage a personal book library and wishlist, connect with friends, and lend or borrow each other's books.

**Live API:** https://hosting-api-yiyu.onrender.com/api
**Frontend repo:** https://github.com/Array-of-Sunshine-Library-App/library-app

---

## Purpose

This API serves a React Native mobile app that lets users track their book collections and share them with friends. The core features are:

- **Users** — create and retrieve user accounts
- **Book library** — add, view, and remove books from a personal collection; filter by lendable status
- **Wishlist** — maintain a list of books to acquire
- **Friends** — send, accept, and reject friend requests; manage a friends list
- **Borrowing/Lending** — request to borrow a friend's book, accept or decline requests, track active loans, and return books

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js 18 |
| Framework | Express |
| Database | Firestore (Firebase NoSQL) |
| Hosting | Render |
| Containerisation | Docker |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project with Firestore enabled
- A Firebase service account key (JSON)

### Environment Variables

Create a `functions/.env` file:

```
FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"..."}
PORT=3000
```

`FIREBASE_SERVICE_ACCOUNT` must be the service account JSON as a single-line string. To generate one, go to your Firebase project → Project Settings → Service Accounts → Generate New Private Key.

### Run with Node

```bash
cd functions
npm install
npm start
```

### Run with Docker

```bash
# Build the image
docker build -t library-api .

# Run with env file
docker run -p 3000:3000 --env-file functions/.env library-api
```

The API will be available at `http://localhost:3000`.

---

## Exploring the API

### Full endpoint reference

```
GET https://hosting-api-yiyu.onrender.com/api/endpoints
```

Returns a JSON object documenting every available endpoint with example request bodies and responses.

### Health check

```
GET https://hosting-api-yiyu.onrender.com/api/test
```

---

## Example Usage

All examples below use the live Render deployment. Replace the base URL with `http://localhost:3000` when running locally.

### Create a user

```bash
curl -X POST https://hosting-api-yiyu.onrender.com/api/users/newuser \
  -H "Content-Type: application/json" \
  -d '{"username": "alice123", "name": "Alice"}'
```

```json
{ "username": "alice123", "name": "Alice" }
```

### Add a book to a library

```bash
curl -X POST https://hosting-api-yiyu.onrender.com/api/users/alice123/books \
  -H "Content-Type: application/json" \
  -d '{
    "bookId": "book001",
    "bookInfo": { "title": "The Dispossessed", "author": "Ursula K. Le Guin" },
    "owned": true,
    "physical": true,
    "lendable": true,
    "isLendable": true,
    "read": true,
    "rating": 5,
    "review": "One of the best sci-fi novels ever written.",
    "notes": ""
  }'
```

### Get all lendable books for a user

```bash
curl https://hosting-api-yiyu.onrender.com/api/users/alice123/books?lendable=true
```

### Send a friend request

```bash
curl -X POST https://hosting-api-yiyu.onrender.com/api/users/alice123/friendrequests \
  -H "Content-Type: application/json" \
  -d '{"username": "bob456"}'
```

### Request to borrow a book

```bash
curl -X POST https://hosting-api-yiyu.onrender.com/api/users/bob456/books/book001/requestlend/alice123
```

---

## Endpoint Groups

| Prefix | Description |
|---|---|
| `GET /api/endpoints` | Full API reference |
| `/api/users` | User management |
| `/api/users/:username/books` | Personal book library |
| `/api/users/:username/wishlist` | Wishlist |
| `/api/users/:username/friends` | Friends system |
| `/api/users/:username/friendrequests` | Friend requests |
| `/api/users/:borrower/books/:bookid/requestlend/:owner` | Borrow requests |
| `/api/users/:owner/lending` | Active loans (lender view) |
| `/api/users/:borrower/borrowing` | Active loans (borrower view) |
