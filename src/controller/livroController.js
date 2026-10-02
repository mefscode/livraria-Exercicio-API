import * as dbLivro from '../repository/livroRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/livro/:id', async (req, resp) => {
  let id = req.params.id;

  let livro = await dbLivro.getLivro(id);
  resp.send(livro);
})

endpoints.get('/livro', async (req, resp) => {
  let livros = await dbLivro.listLivros();
  resp.send(livros);
})

endpoints.post('/livro', async (req, resp) => {
  let livro = req.body;

  let id = await dbLivro.saveLivro(livro);
  resp.send({ id });
})

endpoints.put('/livro/:id', async (req, resp) => {
  let id = req.params.id;
  let livro = req.body;

  let qtd = await dbLivro.updateLivro(id, livro);
  resp.send({ qtd })
})

endpoints.delete('/livro/:id', async (req, resp) => {
  let id = req.params.id;

  let qtd = await dbLivro.deleteLivro(id);
  resp.send({ qtd })
})


export default endpoints;
