var proximoID = 1; // Inicializamos o ID para a primeira linha

function adicionarProduto() {
    var codigo = document.getElementById('codigo').value;
    var nome = document.getElementById('nome').value;
    var fabricante = document.getElementById('fabricante').value;
    var valorVarejo = document.getElementById('valorVarejo').value;
    var valorAtacado = document.getElementById('valorAtacado').value;

    // Criar uma nova linha na tabela
    var tabela = document.getElementById('tabelaProdutos').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    // Atribuir um ID único à linha
    novaLinha.id = 'produto' + proximoID;

    // Inserir as células com os valores do produto
    var cellID = novaLinha.insertCell(0);
    var cellCodigo = novaLinha.insertCell(1);
    var cellNome = novaLinha.insertCell(2);
    var cellFabricante = novaLinha.insertCell(3);
    var cellVarejo = novaLinha.insertCell(4);
    var cellAtacado = novaLinha.insertCell(5);
    var cellAcoes = novaLinha.insertCell(6);

    // Incrementar o ID para a próxima linha
    cellID.innerHTML = proximoID;
    proximoID++;

    cellCodigo.innerHTML = codigo;
    cellNome.innerHTML = nome;
    cellFabricante.innerHTML = fabricante;
    cellVarejo.innerHTML = valorVarejo;
    cellAtacado.innerHTML = valorAtacado;

    // Adicionar botão de criar etiqueta
    var botaoEtiqueta = document.createElement('button');
    botaoEtiqueta.innerHTML = 'Criar Etiqueta';
    botaoEtiqueta.onclick = function() {
        gerarEtiqueta(cellNome.innerHTML, cellFabricante.innerHTML, cellCodigo.innerHTML, cellVarejo.innerHTML, cellAtacado.innerHTML);
    };

    cellAcoes.appendChild(botaoEtiqueta);

    // Limpar os campos de entrada
    document.getElementById('codigo').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('fabricante').value = '';
    document.getElementById('valorVarejo').value = '';
    document.getElementById('valorAtacado').value = '';
}

function gerarEtiqueta(nome, fabricante, codigo, valorVarejo, valorAtacado) {
    var etiquetaContainer = document.getElementById('etiqueta');
    etiquetaContainer.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Fabricante:</strong> ${fabricante}</p>
        <p><strong>Código:</strong> ${codigo}</p>
        <p><strong>Valor Varejo:</strong> ${valorVarejo}</p>
        <p><strong>Valor Atacado:</strong> ${valorAtacado}</p>
    `;
}

function gerarEtiquetas() {
    var tabela = document.getElementById('tabelaProdutos');
    var linhas = tabela.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    var etiquetaContainer = document.getElementById('etiqueta');
    etiquetaContainer.innerHTML = ''; // Limpar conteúdo anterior

    for (var i = 0; i < linhas.length; i++) {
        var codigo = linhas[i].cells[1].innerHTML;
        var nome = linhas[i].cells[2].innerHTML;
        var fabricante = linhas[i].cells[3].innerHTML;
        var valorVarejo = linhas[i].cells[4].innerHTML;
        var valorAtacado = linhas[i].cells[5].innerHTML;

        // Adicionar etiqueta para cada produto
        etiquetaContainer.innerHTML += `
            <div>
                <h2>Etiqueta para ${nome}</h2>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Fabricante:</strong> ${fabricante}</p>
                <p><strong>Código:</strong> ${codigo}</p>
                <p><strong>Valor Varejo:</strong> ${valorVarejo}</p>
                <p><strong>Valor Atacado:</strong> ${valorAtacado}</p>
                <hr>
            </div>
        `;
    }
}