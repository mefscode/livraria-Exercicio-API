import * as ServiceVenda from '../service/vendaService.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/venda/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let venda = await ServiceVenda.ListarVenda(id)
    resp.send(venda);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/venda', async (req, resp) => {
  try {
    let vendas = await ServiceVenda.ListarVendas();
    resp.send(vendas);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.post('/venda', async (req, resp) => {
  try {
    let venda = req.body;

    let id = await ServiceVenda.CriarVenda(venda);
    resp.send({ id });
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.put('/venda/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let venda = req.body;

    let qtd = await ServiceVenda.EditarVenda(id,venda)
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.delete('/venda/:id', async (req, resp) => {
  try{
  let id = req.params.id;

  let qtd = await ServiceVenda.ExcluirVenda(id);
  resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoints;
