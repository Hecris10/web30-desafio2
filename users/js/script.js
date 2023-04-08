const getUsers = () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  const table = document.getElementById("users-table");
  const currentTableBody = document.getElementById("users-table-body");

  if (usuarios) {
    const tableBody = document.createElement("tbody");

    usuarios.forEach((usuario) => {
      const row = tableBody.insertRow();

      const name = row.insertCell(0);
      const email = row.insertCell(1);
      const date = row.insertCell(2);
      const gender = row.insertCell(3);

      name.textContent = usuario.nome;
      email.textContent = usuario.email;
      date.textContent = usuario.date;
      gender.textContent = usuario.gender;
    });

    // table.replaceChild(currentTableBody, tableBody);
    currentTableBody.remove();
    table.appendChild(tableBody);
    return;
  }
  document.getElementById("loading-message").textContent =
    "Nenhum usuário encontrado";
};

const clearUsers = () => {
  localStorage.removeItem("usuarios");
  location.reload();
  alert("Usuários removidos com sucesso!!!");
};
