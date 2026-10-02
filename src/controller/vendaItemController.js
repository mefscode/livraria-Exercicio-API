import * as ServiceItemVenda from '../service/vendaItemService.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/venda-item/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let item = await ServiceItemVenda.ListarItem(id)
    resp.send(item);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/venda-item', async (req, resp) => {
  try {
    let itens = await ServiceItemVenda.ListarItem()
    resp.send(itens);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.post('/venda-item', async (req, resp) => {
  try {
    let item = req.body;

    let id = await ServiceItemVenda.CriarItens(item)
    resp.send({ id });
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.put('/venda-item/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let item = req.body;

    let qtd = await ServiceItemVenda.EditarItem(id,item)
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.delete('/venda-item/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let qtd = await ServiceItemVenda.ExcluirItem(id);
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoints;
