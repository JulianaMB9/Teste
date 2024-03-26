
    function verificarRespostas() {
        var respostasCorretas = document.querySelectorAll('input[type="radio"][id="certo"]');
        var respostasSelecionadas = document.querySelectorAll('input[type="radio"]:checked');


        for (var i = 0; i < respostasSelecionadas.length; i++) {
            var respostaSelecionada = respostasSelecionadas[i];
            var respostaPai = respostaSelecionada.parentElement;

            if (respostaSelecionada.id === 'certo') {
                respostaPai.style.color = 'green';
            } else {
                respostaPai.style.color = 'red'; 
            }
        }
    }


