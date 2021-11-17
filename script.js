var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=valor_produto]');

    items.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });

            let listaProtudos = document.querySelector('.lista-produtos');
            let soma = 0;
            listaProtudos.innerHTML ="";
            items.map(function(val){
                soma+=parseFloat(val.valor);

                listaProtudos.innerHTML+=`
                

    <div class="lista-produto-single">
           <h3>`+val.nome+`</h3>
           <h3>R$ `+val.valor+`</h3>
       </div>

                `;
            })

            soma = soma.toFixed(2)
            nomeProduto.value = "";
            valorProduto.valor = "";

            let elementoSoma = document.querySelector('.soma-produtos h1')
            elementoSoma.innerHTML = 'Total: R$ '+soma;
})

document.querySelector('button[name=limpar]').addEventListener('click',()=>{
    items = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produtos h1').innerHTML = "Limpado";
})