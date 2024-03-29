// НІЧОГО НЕ ЗМІНЮВАТИ
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './db.js';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swagger.json' assert { type: 'json' };

import authRouter from './routes/authRoutes.js';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/users', authRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log('Server is running. Use our API on port: 3000');
});

export default app;
