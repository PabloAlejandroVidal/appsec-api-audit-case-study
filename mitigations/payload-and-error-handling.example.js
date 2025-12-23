// mitigations/payload-and-error-handling.example.js
// Example of defensive mitigations related to findings described in the case study.
// This code does NOT reproduce vulnerabilities and is provided for educational purposes only.

const express = require('express');
const app = express();

/**
 * Mitigation for Finding A:
 * Limit JSON payload size to prevent resource exhaustion.
 */
app.use(express.json({ limit: '1mb' }));

/**
 * Mitigation for Finding B:
 * Sanitize error responses in production environments.
 */
app.use((err, req, res, next) => {
  // Internal logging (should be directed to a secure log system)
  console.error(err.stack);

  // Generic error response for clients
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
