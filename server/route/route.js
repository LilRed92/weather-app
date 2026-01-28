import express from 'express';
import { getWeatherData } from '../controllers/getWeatherData.js';

const router = express.Router();

router.get('/api/weather', getWeatherData);

export default router;