const users = [];

const cadastrar = () => {
  const nome = document.getElementById("name");
  const email = document.getElementById("email");
  const date = document.getElementById("date");
  const gender = document.getElementById("gender");
  const address = document.getElementById("address");
  const login = document.getElementById("login");
  const senha = document.getElementById("password");

  const usuario = {
    nome: nome.value,
    email: email.value,
    senha: senha.value,
    date: date.value,
    gender: gender.value,
    address: address.value,
    login: login.value,
    password: password.value,
  };

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  users.push(usuario);
  addUsers(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  console.log("Users:", users);
  nome.value = "";
  email.value = "";
  senha.value = "";
  date.value = "";
  gender.value = "";
  address.value = "";
  login.value = "";
  password.value = "";
};

const addUsers = (usuario) => {
  const user = usuario.nome + " " + usuario.email + " " + usuario.date;
  const list = document.getElementById("users-list");
  const text = document.createTextNode(user);
  const userDiv = document.createElement("div");
  userDiv.appendChild(text);
  list.appendChild(userDiv);
  alert("Usuário cadastrado com sucesso!");
};
