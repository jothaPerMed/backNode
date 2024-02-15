import express, { Request, Response } from 'express';
import yaml from 'yamljs';
import swaggerUi from 'swagger-ui-express';

const app = express();
const PORT = process.env.PORT || 4000;

// Load Swagger definition from YAML file
import path from 'path';

const swaggerDefinition = yaml.load(path.join(__dirname, 'swagger.yaml'));


// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

// Define your API routes
app.get('/hello', (req:any, res:any) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});