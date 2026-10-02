import * as dbVendaItem from '../repository/vendaItemRepository.js';

export async function ListarItem(id){
        let item = await dbVendaItem.getVendaItem(id);
        return item;
}

export async function ListarItens(){
        let itens = await dbVendaItem.listVendaItens();
        return itens;
}

export async function CriarItens(item){
      let id = await dbVendaItem.saveVendaItem(item);
      return id;
}

export async function EditarItem(id,item){
    let qtd = await dbVendaItem.updateVendaItem(id, item);
    return qtd;
}

export async function ExcluirItem(id){
        let qtd = await dbVendaItem.deleteVendaItem(id);
        return qtd;
}