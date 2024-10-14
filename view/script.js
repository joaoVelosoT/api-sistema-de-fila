const form = document.getElementById("form");
const nome = document.getElementById("nome");
const prox = document.getElementById("prox");
const monitor = document.getElementById("monitor");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    

     try {
        const response = await fetch('http://localhost:5000/fila', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
            },
            body : JSON.stringify({
                nome : nome.value,
                status : 'Pendente'
            })
        })
        
        const json = await response.json();

        console.log(json);
        
        nome.value = "";
     } catch (error) {
        console.log(error);    
     }

    
    console.log(nome.value)
})


const proxLista = async() => {
    try {
        const response = await fetch('http://localhost:5000/fila/proxLista', {
            method : 'GET'
        })

        const json = await response.json();

        // console.log(json.proxLista);

        prox.innerText = json.proxLista.nome
        
    } catch (error) {
        console.error(error);
    }
}


const monitorFunc = async() => {
    try {
        

        const response = await fetch('http://localhost:5000/fila/pendentes', {
            method : "GET"
        })

        const json = await response.json();
        console.log(json.pendentes)

        const pendentes = json.pendentes;
        
        pendentes.forEach(element => {
            const p = document.createElement('p');
            // Adiciona o nome do elemento como texto do parágrafo
            p.textContent = element.nome;
            // Anexa o parágrafo à div monitor
            monitor.appendChild(p);
        });
        // const container = document.createElement("div");
        // container.appendChild = document.createElement("p").textContent = json
    } catch (error) {
        console.error(error);
    }
}
monitorFunc();

proxLista();