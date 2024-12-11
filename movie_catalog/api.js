const express = require('express');
const app = express();
const cors = require('cors');

// Habilita o CORS
app.use(cors());

// Importa o JSON completo
const movies = require('./moviesDB.json');

// Rota raiz para teste
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rota para retornar todos os filmes
app.get('/movies', (req, res) => {
    res.json(movies); // Envia o JSON completo como resposta
});

// Nova rota para retornar um filme específico pelo movieId
app.get('/movies/:movieId', (req, res) => {
    const movieId = parseInt(req.params.movieId, 10); // Converte movieId para número
    const movie = movies.find(m => m.id === movieId);

    if (movie) {
        res.json(movie);
    } else {
        res.status(404).send({ message: 'Filme não encontrado' });
    }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log(`Listening on port: http://localhost:3000`);
});