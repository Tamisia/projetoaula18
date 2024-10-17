const calendarDays = document.getElementById('calendar-days');
const eventButtons = document.querySelectorAll('.event-type');
let selectedEventType = 'meeting'; // Tipo de evento padrão

// Configura os botões para selecionar o tipo de evento
eventButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove a classe 'selected' de todos os botões
        eventButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Adiciona a classe 'selected' ao botão clicado
        this.classList.add('selected');
        selectedEventType = this.value; // Atualiza o tipo de evento selecionado
    });
});

// Adiciona evento de clique aos dias já existentes
const days = document.querySelectorAll('.day:not(.empty)');
days.forEach(day => {
    day.addEventListener('click', function () {
        markDay(day);
    });
});

// Marca o dia com a cor correspondente ao tipo de evento
function markDay(dayElement) {
    const colorMap = {
        meeting: 'lightblue',
        birthday: 'lightgreen',
        important: 'lightcoral'
    };

  
    dayElement.style.backgroundColor = colorMap[selectedEventType];
}


