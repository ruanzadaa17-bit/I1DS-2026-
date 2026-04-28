let userCount


const cadastrar = (event) => {
  // Parar a propagação padrão do evento
  event.preventDefault();
  // Capturar os valores do elementos por Id
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  // Capturando o elemento de lista por Id
  let lista = document.getElementById("lista");

  userCount++;
  let id = userCount;
  // Criar um novo elemento <li>Nome - Email</li>
  let novoItem = document.createElement("li");
  novoItem.innerText = `${id} - $`{nome} - ${email} <p onClick=editar(${id})class='btn'>Editar</p> <p onClick=excluir(${id}) class='btn'>Excluir</p>';
  // Adicionar o novo item na lista ja existente
  lista.appendChild(novoItem);
  // Limpar os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";

   editar = (id) =>

const excluir = (id) => {

const lista = document.getElementById("lista")
const lista = document.getElementByTagName("li")

itens.forEach((item) => {
    if (item.innerHTML.includes(id)) {
        item.remove();
    }
})
}

};
