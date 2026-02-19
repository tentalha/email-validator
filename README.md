# Email Validator API

Simple Express API for validating email addresses with comprehensive checks including regex, MX records, SMTP, disposable email detection, and typo validation.

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file:
```
PORT=3030
```

## Running Locally

```bash
npm start
```

## Running with Docker

```bash
docker compose up
```

## API Endpoints

### POST /validate-email

**Request:**
```bash
curl -X POST http://localhost:3030/validate-email \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com"}'
```

### GET /validate-email

**Request:**
```bash
curl "http://localhost:3030/validate-email?email=user@example.com"
```

### Response Format

```json
{
  "email": "user@example.com",
  "valid": true,
  "details": {
    "valid": true,
    "validators": {
      "regex": { "valid": true },
      "typo": { "valid": true },
      "disposable": { "valid": true },
      "mx": { "valid": true },
      "smtp": { "valid": true }
    }
  }
}
```

## Validation Features

- **Regex**: Email format validation
- **MX Records**: Domain has valid mail servers
- **SMTP**: Mailbox exists and accepts mail
- **Disposable**: Detects temporary email services
- **Typo**: Identifies common typos in domains
