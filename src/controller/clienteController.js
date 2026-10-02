import * as ServiceClientes from '../service/clienteService.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let cliente = await ServiceClientes.ListarUsuario(id)

    resp.send(cliente);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/cliente', async (req, resp) => {
  try {
    let clientes = await ServiceClientes.ListarUsuarios();
    resp.send(clientes);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.post('/cliente', async (req, resp) => {
  try {
    let cliente = req.body;

    let id = await ServiceClientes.CriarUsuario(cliente)

    resp.send({ id });
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.put('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let cliente = req.body;


    let qtd = await ServiceClientes.EditarUsuario(id, cliente)
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.delete('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let qtd = await ServiceClientes.ExcluirUsuario(id)
    resp.send({ qtd })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoints;
