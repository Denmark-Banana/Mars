import "./db";
import app from './app';
import dontenv from "dotenv";
dontenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 3000;
const handleListening = () =>
    console.log(`✅  listening on port ${PORT}!`);

app.listen(PORT, handleListening);