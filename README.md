# TLD API

The TLD API provides a simple way to retrieve the current Top-Level Domain (TLD) for use in browser extensions or applications. This API can be used to dynamically update the TLD value based on server-side configurations.

## Features

- Fetch the current TLD value from the server.
- Easy integration with browser extensions and web applications.

## Installation

You can host the TLD API on any platform that supports Node.js. To get started, clone the repository and install the necessary dependencies.

```bash
git clone <repository-url>
cd tld-api
npm install
```

Usage

To use the TLD API, make a GET request to the following endpoint:

sql

GET /get-tld

Example Response

json

{
"tld": "io"
}

Deployment

You can deploy this API on platforms like Render.com or Heroku. Ensure that your server is set up to handle incoming requests.
Contributing

If you'd like to contribute to the project, feel free to submit a pull request or open an issue.
