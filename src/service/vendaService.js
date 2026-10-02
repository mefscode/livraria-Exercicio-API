import * as dbVenda from '../repository/vendaRepository.js';

export async function ListarVenda(id) {
    let venda = await dbVenda.getVenda(id);
    return venda;
}

export async function ListarVendas() {
    let vendas = await dbVenda.listVendas();
    return vendas;
}

export async function CriarVenda(venda){
if(venda.preco < 0){
    throw new Error("O preco de um Livro deve ser acima de R$ 0.00");
}

      let id = await dbVenda.saveVenda(venda);
      return id;
}

export async function EditarVenda(id, venda){
     let qtd = await dbVenda.updateVenda(id, venda);
     return qtd;
}

export async function ExcluirVenda(id){
      let qtd = await dbVenda.deleteVenda(id);
      return qtd;
}