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
  
    let dadosCadastrados = JSON.parse(localStorage.getItem('dados')) || [];
  
    dadosCadastrados.push(dados);

    localStorage.setItem('dados', JSON.stringify(dadosCadastrados));
  
    const form = document.querySelector("form");
    form.reset();
  
    alert('Cadastrado com sucesso');
    
  }

