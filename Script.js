function findAndCopySelectHTML() {
    const select = document.querySelector('select.MagnetoSelect[style="WIDTH: 250px; HEIGHT: 125px"][name="vinculados"][id="vinculados"][multiple]');
 
    if (!select) {
        console.warn("Nenhum elemento <select> com os atributos especificados foi encontrado.");
        return;
    }
 
    console.log("Elemento <select> encontrado:");
 
    const selectHTML = select.outerHTML;
    console.log("Código HTML do <select> encontrado:\n", selectHTML);
 
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = selectHTML;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
 
    alert("Código HTML do <select> copiado para a área de transferência!");
}

findAndCopySelectHTML();
