fetch('http://localhost:3000/usuario')
.then(response => response.json())
.then(carregarDados =>{
    const table = document.querySelector("table");
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = '';
    
    carregarDados.forEach(valor => {
        const tr = document.createElement('tr')
    
        Object.entries(valor).forEach(([campo, valor]) =>{
            if (campo === 'id')
                return;
            const td = document.createElement('td')
            td.textContent = valor;
            tr.appendChild(td)
        })
    
        tbody.appendChild(tr)
})

})
