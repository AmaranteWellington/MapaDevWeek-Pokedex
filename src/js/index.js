/* Quando clicar no pokemon da listagem  temos  que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

pra isso vamos trabalhar com dois elementos:
1- listagem
2- cartao pokemon

precisamos criar duas variaves no JS para trabalhar com os elementos da tela

vamos trabalhar com um evento de clique feito pelo usuario na listagem de pokemon

- remover a classe "aberto" so do cartao que esta aberto
-ao clicar  em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
-remover a classe ativa do pokemon selecionado
-adicionar a calsse ativo no item da lista selecionado

*/



//criar duas variaves no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon=>{
    //vamos trabalhar com um evento de clique feito pelo usuario na listagem de pokemon

    pokemon.addEventListener('click', () => {
        //- remover a classe "aberto" so do cartao que esta aberto

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


        /*-ao clicar  em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar*/

        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoParaAbrir = 'cartao-'+ idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')


        //-remover a classe ativa do pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //-adicionar a calsse ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})