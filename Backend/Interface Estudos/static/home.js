function menu(){
    const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        tabContents.forEach(content => content.style.display = 'none');
        document.getElementById(tabId).style.display = 'block';
    });
});
}

menu();

// Função para preencher o select de horários disponíveis
function preencherSelectHorarios(horarios) {
const selectHorarios = document.getElementById("horarios");
selectHorarios.innerHTML = ""; // Limpar o select antes de preencher novamente

horarios.forEach((horario) => {
const option = document.createElement("option");
option.value = horario;
option.textContent = horario;
selectHorarios.appendChild(option);
});
}

// Função para buscar os horários disponíveis quando os campos do formulário forem alterados
function buscarHorarios() {
const idMedico = document.getElementById("id_medico").value;
const dataConsulta = document.getElementById("data").value;

if (idMedico && dataConsulta) {
// Enviar solicitação AJAX ao servidor Flask para buscar os horários disponíveis
fetch("/horarios_disponiveis", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ idMedico: idMedico, dataConsulta: dataConsulta })
})
.then(response => response.json())
.then(data => {
    if (data.status === "success") {
        // Preencher o select com os horários disponíveis
        preencherSelectHorarios(data.horarios);

        // Preencher a tabela com os horários disponíveis
        const tbody = document.querySelector("#horariosTable tbody");
        tbody.innerHTML = ""; // Limpar a tabela antes de preencher novamente

        data.horarios.forEach((horario) => {
            const row = document.createElement("tr");
            const horaCell = document.createElement("td");
            const disponibilidadeCell = document.createElement("td");

            horaCell.textContent = horario;
            disponibilidadeCell.textContent = "Disponível";
            disponibilidadeCell.className = "disponivel";

            row.appendChild(horaCell);
            row.appendChild(disponibilidadeCell);
            tbody.appendChild(row);
        });
    } else {
        // Exibir uma mensagem de erro ou tomar alguma ação apropriada
        console.error(data.message);
    }
})
.catch(error => {
    // Tratar qualquer erro na solicitação AJAX
    console.error("Erro na solicitação AJAX:", error);
});
}
}

// Adicionar o evento change nos campos do formulário para chamar a função buscarHorarios
document.getElementById("id_medico").addEventListener("change", buscarHorarios);
document.getElementById("data").addEventListener("change", buscarHorarios);

// Chamar a função buscarHorarios inicialmente caso os campos já estejam preenchidos
buscarHorarios();