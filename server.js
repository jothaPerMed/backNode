const express = require('express');
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

// Load Swagger definition from YAML file
const swaggerDefinition = yaml.load('swagger.yaml');

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

// Define your API routes
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
