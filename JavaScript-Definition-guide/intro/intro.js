console.log('Hello world')

// A função acima é utilizada para mostrar textos e outros valores no terminal do windows ou no navegador. Essas duas barras servem para comentários.

let x; // let usado para declarar variáveis, nesse caso declarou a variável de nome x.

// Javascript suporta diversos tipos de valores

x = 1 // Números
x = -0,01 // Números podem ser inteiros ou reais
x = "hello world" // String de texto em aspas duplas
x = 'Javascript' // Aspas simples atambém delimitam strings
x = true // valor booleano
x = false // outro valor booleano
x = null // null é um valor especial que quer dizer "sem valor / no value."
x = undefined // Outro valor especial como o null.

// o datatype mais importante do javascript é o objeto
// Um objeto é a coleção de nome/valor, pares ou uma string de valor mapa

let book = { // objetos são usados em colchetes
    topic: "Javascript", // a propriedade 'topic' tem valor 'Javascript'
    edition: 7 // a propriedade 'edition' tem valor 7
} // o colchete final mostra o término do objeto.

// Acessar as propriedades de um objeto com . ou []
book.topic // == "Javascript"
book["edition"] // == 7 : outra forma de acessar o valor da propriedade
book.author = "Flanagan" // Cria uma nova propriedade por associação
book.contents = {} // é um objeto vazio com nenhuma propriedade

// Acesso condicional de propriedades com ?.
book.contents?.ch01.sect1 // == undefined: book.contents não tem a propriedade ch01

// JavaScript também suporta arrays (listas com endereços numéricos) de valores:

let primes = [2, 3, 5, 7] //Array de 4 valores, delimitado com [ e ]
primes[0] //=> 2: o primeiro elemento (index 0) do array
primes.length //=> 4: quandos elementos tem no array
primes[primes.length-1] //=> 7: o último elemento do array
primes[4] = 9 //Adiciona um novo elemento por associação
primes[4] = 11 //Ou altera um elemento existente por associação
let empty = [] // [] é um array vazio com nenhum elemento
empty.length // => 0: tamanho do valor 'empty'

// Arrays e objetos podem suportar outros arrays e objetos:
let points = [ //Um array com 2 elementos.
    {x: 0, y: 0}, //Cada elemento é um objeto.
    {x: 1, y: 1},
]
let data = [ //Um objeto com 2 propriedades
    trial1: [[1,2], [3,4]], //O valor de cada propriedade é um array.
    trial2: [[2,3] , [4,5]] //Os elementos de arrays são arrays.
]