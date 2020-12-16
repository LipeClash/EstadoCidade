const estados = [
    {
        uf: "SP", cidades: [
         {id: 1, nome: "Mongaguá"}
        ,{id: 2, nome: "Itanhaém"}
        ,{id: 3, nome: "Peruíbe"}
        ] 
    }
    ,
    {
        uf: "RJ", cidades: [
          {id: 4, nome: "Níteroi"}
        , {id: 5, nome: "Macaé"}
        , {id: 6, nome: "Santa Maria Madalena"}
        ] 
    }
    ,
    {
        uf: "BA", cidades: [
         {id: 7, nome: "Salvador"}
       , {id: 8, nome: "Camaçari"}
       , {id: 9, nome: "Itabuna"}
        ] 
    }
];

const alteraEstado = () =>{
    const selectEstado = document.getElementById("estado");
    const estadoSelecionado = selectEstado.value;

    const selectCidade = document.getElementById("cidade");
    selectCidade.innerHTML = "";

    const divSaida = document.getElementById("saida");
    divSaida.innerHTML = "";

    if(estadoSelecionado){
        adicionaOpcaoSelect(selectCidade, "", "Selecione uma cidade");

        const ufFiltro = estados.filter(
            estado => estado.uf === estadoSelecionado)[0];  
        
        ufFiltro.cidades.forEach(
            cidade => adicionaOpcaoSelect(selectCidade, cidade.id, cidade.nome)
        );
    }

    ajustaComboCidades();

};

const ajustaComboCidades = () => {
    const selectCidade = document.getElementById("cidade");

    if (selectCidade.length > 0){
        selectCidade.disabled = false;
    }else{
        adicionaOpcaoSelect(selectCidade, "", "---Selecione um estado---");
        selectCidade.disabled = true;
    }
};

const alteraCidade = () => {
    const divSaida = document.getElementById("saida");
    const selectEstado = document.getElementById("estado");
    const selectCidade = document.getElementById("cidade");

    const estadoSelecionado = selectEstado.value;
    const cidadeSelecionada = selectCidade.options[selectCidade.selectedIndex].text;
    if (selectCidade.value){
        divSaida.innerHTML = `${cidadeSelecionada}/${estadoSelecionado}`;
    }else{
        divSaida.innerHTML = "";
    }
};

const adicionaOpcaoSelect = (select, value, text) => {
    select.insertAdjacentHTML("beforeend"
                 , `<option value="${value}">${text}</option>`);
};

const iniciar = () => {
    document.getElementById("estado").addEventListener("change", alteraEstado);
    document.getElementById("cidade").addEventListener("change", alteraCidade);
    ajustaComboCidades();
};

document.addEventListener("DOMContentLoaded", iniciar);