# Documentação do Script - Facilitação da Criação de Usuários no Sistema SGU

Este script foi desenvolvido com o objetivo de **facilitar a criação de usuários** no **Sistema SGU** da Unimed Goiânia. Ele visa automatizar a cópia do código HTML de um campo de seleção específico no sistema, o que contribui para a otimização do processo de vinculação de usuários ou dependentes.

## Objetivo

O principal objetivo deste script é **automatizar a cópia do código HTML** de um campo de seleção (`<select>`) encontrado em um formulário dentro do SGU. Esse campo permite selecionar diferentes "vinculados", ou seja, usuários ou dependentes associados a um determinado usuário.

Com a execução deste script, o código HTML do campo é copiado automaticamente para a área de transferência do usuário, permitindo sua reutilização em outras partes do sistema ou em novos processos sem a necessidade de busca manual.

## Funcionamento

### 1. Localização do Campo de Seleção

O script é projetado para localizar o **primeiro campo de seleção** (`<select>`) com atributos específicos, tais como nome, ID, e estilo, presentes no formulário do SGU. O campo em questão é utilizado para selecionar os vinculados de um usuário.

### 2. Cópia do Código HTML

Após localizar o campo correto, o código HTML completo do `<select>`, incluindo todas as suas opções (`<option>`), é copiado para a área de transferência, sem a necessidade de intervenção manual.

### 3. Confirmação de Sucesso

Após a cópia bem-sucedida do código, o script exibe uma mensagem de confirmação para informar o usuário de que o código foi copiado corretamente. Caso o campo de seleção não seja encontrado, o script exibe uma mensagem de erro no console, alertando o usuário sobre a falha.

## Como Utilizar

1. **Acesse a página do SGU** onde deseja realizar a criação ou alteração de usuários.
2. **Execute o script** através do console do navegador. O script localizará automaticamente o campo de seleção correto.
3. **Códigos Copiados**: O código HTML será copiado para a área de transferência, pronto para ser utilizado em outros processos ou configurações no sistema.

## Fluxo de Execução do Script

1. A função `findAndCopySelectHTML()` é executada automaticamente.
2. A função realiza a busca pelo primeiro campo `<select>` que possua os seguintes atributos:
   - Classe: `MagnetoSelect`
   - Estilo: `WIDTH: 250px; HEIGHT: 125px`
   - Nome: `vinculados`
   - ID: `vinculados`
   - Atributo `multiple` (indica que a seleção de múltiplos itens é permitida)
   
3. Caso o campo seja encontrado:
   - O código HTML completo do campo é copiado para a área de transferência.
   - Uma mensagem de confirmação é exibida ao usuário.
   
4. Caso o campo não seja encontrado, uma mensagem de erro será registrada no console, indicando que o elemento não foi localizado.

## Código

```javascript
// Função para localizar e copiar o código HTML completo do primeiro <select> com os parâmetros fornecidos
function findAndCopySelectHTML() {
    // Encontra o primeiro <select> com os atributos exatos
    const select = document.querySelector('select.MagnetoSelect[style="WIDTH: 250px; HEIGHT: 125px"][name="vinculados"][id="vinculados"][multiple]');
 
    if (!select) {
        console.warn("Nenhum elemento <select> com os atributos especificados foi encontrado.");
        return;
    }
 
    console.log("Elemento <select> encontrado:");
 
    // Pega o código HTML completo do <select>, incluindo as <option>
    const selectHTML = select.outerHTML;
    console.log("Código HTML do <select> encontrado:\n", selectHTML);
 
    // Cria um elemento de texto para copiar o código HTML para a área de transferência
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = selectHTML;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
 
    alert("Código HTML do <select> copiado para a área de transferência!");
}
 
// Executa a função
findAndCopySelectHTML();
