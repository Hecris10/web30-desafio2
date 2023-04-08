const cadastrar = () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (!usuarios) {
    usuarios = [];
  }
  const email = document.getElementById("email");
  if (checkUser(usuarios, email.value)) {
    alert("Email já cadastrado");
    return;
  }

  const nome = document.getElementById("name");
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

  usuarios.push(usuario);
  console.log(usuarios);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  nome.value = "";
  email.value = "";
  senha.value = "";
  date.value = "";
  gender.value = "";
  address.value = "";
  login.value = "";
  password.value = "";

  alert("Usuário cadastrado com sucesso!!!");
  return;
};

const checkUser = (usuarios, newUserEmail) => {
  console.log(usuarios);
  if (usuarios) {
    if (usuarios.find((u) => u.email === newUserEmail)) {
      return true;
    }
    return false;
  }
};
