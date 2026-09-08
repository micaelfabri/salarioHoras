const form = document.getElementById('calc-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const salary = Number(document.getElementById('salary').value);
    const time = Number(document.getElementById('time').value);
    
    const result = document.getElementById('result');

    if (isNaN(salary) || isNaN(time) || time === 0) {
        result.hidden = false;
        result.textContent = 'Dados inválidos';
        return;
    }

    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const valorHora = salary / time;

    result.hidden = false;
    result.textContent = formatador.format(valorHora);



})