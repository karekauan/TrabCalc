function insert(num)
{
    // Obtém o conteúdo atual do campo de entrada (ID resultado).
    var numero = document.getElementById('result').innerHTML;
    // Adiciona o número ou operador ao conteúdo existente do campo de entrada.
    document.getElementById('result').innerHTML = numero + num;
}

function clean()
{
    // Limpa o conteúdo do campo de entrada da calculadora.
    document.getElementById('result').innerHTML = "";
}

function calculate()
{
    // Obtém o conteúdo atual do campo de entrada (ID resultado).
    var resultado = document.getElementById('result').innerHTML;
    if(resultado)
    {
        // Usa a função eval() para avaliar a expressão matemática no campo de entrada e exibe o resultado.
        document.getElementById('result').innerHTML = eval(resultado);
    }
    else
    {
        // Se o campo de entrada estiver vazio, exibe a mensagem "Nada...".
        document.getElementById('result').innerHTML = "Nada..."
    }
}