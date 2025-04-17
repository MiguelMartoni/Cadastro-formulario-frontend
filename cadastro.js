function cadastrar() {
    const nome = document.getElementById("inpNome").value.trim();
    const email = document.getElementById("inpEmail").value.trim();
    const idade = document.getElementById("inpIdade").value.trim();
  
    if (!nome || !email || !idade) {
      alert("Preencha todos os campos");
      return;
    }
  
    const dados = { 
        nome,   
        email, 
        idade };
  
    fetch('http://localhost:3000/usuario',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then (response => response.json())
    .then (() => {
      alert("Cadastrado com sucesso")
      
      const form = document.querySelector("form");
      form.reset();
    })
    .catch(error => {
      console.error(error);
      alert("Erro ao cadastrar. Verifique o console.");
    });
  }

