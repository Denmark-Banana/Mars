import dontenv from 'dotenv';
import './db';
import app from './app';

import './models/Video';
import './models/Comment';
import './models/User';

dontenv.config();

const PORT = process.env.PORT || 3000;
const handleListening = () => console.log(`✅  listening on port ${PORT}!`);

app.listen(PORT, handleListening);
