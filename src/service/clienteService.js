import * as dbCliente from '../repository/clienteRepository.js';

export async function ListarUsuario(id){
      let cliente = await dbCliente.getCliente(id);
      return cliente;
}

export async function ListarUsuarios(){
      let clientes = await dbCliente.listClientes();
      return clientes;
}

export async function CriarUsuario(cliente){
    let clienteAtual = await dbCliente.getClienteByCpf(cliente.cpf);
    if(clienteAtual != null){
        throw new Error("Cliente já existe");
        
    }
      let id = await dbCliente.saveCliente(cliente);
      return id;
}

export async function EditarUsuario(id,cliente){
      let qtd = await dbCliente.updateCliente(id, cliente);
      return qtd;
}

export async function ExcluirUsuario(id){
      let qtd = await dbCliente.deleteCliente(id);
      return qtd;
}