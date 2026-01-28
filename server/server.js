import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: ["http://localhost:5173"]
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the server!' });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}