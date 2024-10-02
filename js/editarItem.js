export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !=="") {
        const itemTextoAtualizado = elemento.querySelector("#item-lista-texto");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprando = elemento.querySelector(".input-checkbox").checked;

        if(estavaComprando) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classlist.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }
    }
}