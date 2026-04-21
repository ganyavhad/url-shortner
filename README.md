# URL Shortener

A simple and efficient URL shortener service built with Node.js and Express.

## Features

- Shorten long URLs with a single click
- Copy shortened URLs to clipboard
- Dynamic short URL domain from environment variables
- In-memory URL mapping
- Modern and responsive UI

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
SHORT_URL_DOMAIN=https://ganeshavhad.com
PORT=3000
```

- `SHORT_URL_DOMAIN`: The domain to use for shortened URLs (required)
- `PORT`: The port on which the server will run (default: 3000)

## Usage

### Starting the Server

For production:
```bash
npm start
```

For development:
```bash
npm run dev
```

Then open your browser and navigate to `http://localhost:3000`.

Enter a long URL and click "Shorten URL" to get your shortened link. You can copy the shortened URL to your clipboard using the "Copy to Clipboard" button.

### Important Notes

- **In-Memory Storage**: URLs are stored in memory and will be lost when the server restarts. For persistence, consider implementing a database.
- **Short Code Generation**: Short codes are randomly generated using a 6-character alphanumeric format.
- **URL Validation**: The API accepts any string as a URL. Consider adding URL validation for production use.

## API Endpoints
 (Success - 200):**
```json
{
  "shortUrl": "https://ganeshavhad.com/abc123"
}
```

**Response (Error - 400):**
```json
{
  "error": "URL is required"
}
```

### GET /:shortCode

Redirects to the original URL associated with the short code.

**Response (Success - 302):** Redirects to the original URL

**Response (Error - 404):** Returns "URL not found"
```

**Response:**
```json
{
  "shortUrl": "https://ganeshavhad.com/abc123"
}
```

### GET /:shortCode

Redirects to the original URL associated with the short code.

## Author

Ganesh Avhad

## License

ISC