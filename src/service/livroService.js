import * as dbLivro from '../repository/livroRepository.js';

export async function ListarLivro(id) {
    let livro = await dbLivro.getLivro(id);
    return livro;
}

export async function ListarLivros() {
    let livros = await dbLivro.listLivros();
    return livros;
}

export async function CriarLivro(livro) {
    let id = await dbLivro.saveLivro(livro);
    return id
}

export async function EditarLivro(id, livro) {
    let qtd = await dbLivro.updateLivro(id, livro);
    return qtd;
}

export async function ExcluirLivro(id){
        let qtd = await dbLivro.deleteLivro(id);
        return qtd;
}