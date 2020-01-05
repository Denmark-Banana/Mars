import app from './app';


const PORT = 3000;

const handleListening = () =>
    console.log(`Example app listening on port ${PORT}!`);

app.listen(PORT, handleListening);