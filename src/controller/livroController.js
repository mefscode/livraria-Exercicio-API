import * as ServiceLivro from '../service//livroService.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/livro/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let livro = await ServiceLivro.ListarLivro(id)
    resp.send(livro);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/livro', async (req, resp) => {
  try {
    let livros = await ServiceLivro.ListarLivros()
    resp.send(livros);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.post('/livro', async (req, resp) => {
  try {
    let livro = req.body;

    let id = await ServiceLivro.CriarLivro(id)
    resp.send({ id });
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.put('/livro/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let livro = req.body;

    let qtd = await ServiceLivro.EditarLivros(id,livro)
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.delete('/livro/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let qtd = await ServiceLivro.ExcluirLivro(id);
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoints;
