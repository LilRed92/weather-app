import express from 'express';
import { getWeatherData } from '../controllers/getWeatherData.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API root!' });
});

router.get('/results', getWeatherData);

router.get('/icon', getIconData);

export default router;