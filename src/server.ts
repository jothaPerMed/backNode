import express, { Request, Response } from 'express';
import yaml from 'yamljs';
import swaggerUi from 'swagger-ui-express';

const app = express();
const PORT = process.env.PORT || 6000;

// Load Swagger definition from YAML file
import path from 'path';

const swaggerDefinition = yaml.load(path.join(__dirname, 'swagger.yaml'));
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Producto } from './entities/Producto';


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

createConnection().then(async (connection) => {
  const app = express();
  const puerto = 5000;

  app.use(express.json());

  // Configura tus rutas y controladores aquí

  app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
  });
});