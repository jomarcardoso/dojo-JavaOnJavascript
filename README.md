# O Java do JavaScript

A maioria dos desenvolvedores frontend devem saber que o parte "java" do nome Javascript foi uma estratégia de marketing e não uma derivação da tecnologia.

Não importa o que façamos, se for repetido por um tempo adquirimos "manias" que tornam-nos mais rápido naquilo, mas de certa forma dependentes também.

Indo ao ponto, Orientação a Objetos principalmente com Java é algo muito difundido, ensinado em faculdades e incentivado como ponto de entrada para a programação por muitos. Sem entrar em discussão sobre a forma correta de começar na programação, mas sim entender que muito do que aprendemos não é uma regra geral válida para qualquer linguagem de programação ou ambiente de trabalho.

Então vou mencionado as manias herdadas para você identificar-se ou não como um "Javeiro" infiltrado. Muito do que trarei é uma relação do paradigma orientado a objetos com funcional.

## Todo código está dentro de classes

Essa foi fácil de identificar, mas arrisco dizer que é uma das mais difícil de perder, conseguir deixar de instanciar tudo que ver, ter propriedades que não são atributos.

Começando o desapego do mais fácil para o mais difícil.

### Usa apenas os métodos

Não precisa dos atributos da classe, só do que o método faz.

```js
class JaveiroInfiltrado {
  static digaAlgo() {
    return 'Time que ta ganhando não mexe.';
  }
}

JaveiroInfiltrado.digaAlgo(); // Time que ta ganhando não mexe.
```

Só escrever uma função. Vou repetir muito isso aqui 😉.

```js
function digaAlgo() {
  return 'Água parada não move moinho';
}

digaAlgo(); // Água parada não move moinho.
```

### Usa o construtor sem argumentos

As vezes é preciso apenas armazenar um estado, então coloca no construtor.

```js
class JaveiroInfiltrado {
  constructor() {
    this.frase = 'A grama do vizinho';
  }
  
  digaAlgo(continuação) {
    return this.frase + ' ' + continuação;
  }
}

const javeiroInfiltrado = new JaveiroInfiltrado();

javeiroInfiltrado.digaAlgo('é sempre mais verde.');
// A grama do vizinho é sempre mais verde.
```

Que tal usar um objeto?

```js
const javeiroCamuflado = {
  frase: 'De grão em grão',
  digaAlgo(continuação) {
    return this.frase + ' ' + continuação;
  }
}

javeiroCamuflado.digaAlgo('a galinha enche o papo.');
// De grão em grão a galinha enche o papo.
```

### Classe completinha bonitinha

Agora sim, recebe parâmetros no construtor, armazena no "this", expõe os métodos e tudo mais.

```js
class JaveiroInfiltrado {
  constructor(frase) {
    this.frase = frase;
  }
  
  digaAlgo(continuação) {
    return this.frase + ' ' + continuação;
  }
}

const javeiroInfiltrado = new JaveiroInfiltrado('A grama do vizinho');

javeiroInfiltrado.digaAlgo('é sempre mais verde.');
// A grama do vizinho é sempre mais verde.
```

Função, ora.

```js
function JaveiroDisfarçado(frase) {
  function digaAlgo(continuação) {
    return frase + ' ' + continuação;
  }
  
  return { digaAlgo };
}

const javeiroDisfarçado = JaveiroDisfarçado('De grão em grão');

javeiroDisfarçado.digaAlgo('a galinha enche o papo.');
// De grão em grão a galinha enche o papo.
```

Ta aqui pode ter complicado para alguns, mas espero que estejas aqui para aprender.

A chamada da função "JaveiroDisfarçado" retorna um objeto com a função "digaAlgo", ou seja o "javeiroDisfarçado" (com letra minúscula) recebeu esse objeto.

```js
javeiroDisfarçado = { digaAlgo };
```

Assemelha-se a uma instância em Orientação a objetos, mas aqui tem outro nome, é "closure".

O conteúdo do "javeiroDisfarçado" vem de dentro da função "JaveiroDisfarçado", logo ela está em outro escopo, ela acessa valores dali de dentro, o argumento "frase" por exemplo.

### Classe que tem até métodos estáticos junto

Claro que o desenvolvedor não colocará uma funcionalidade, que é só usada ali, em um outro lugar, só por que ela não usa o "this" da classe, então ele usa o "static".

```js
class JaveiroInfiltrado {
  constructor(frase) {
    this.frase = frase;
  }
  
  digaAlgo(continuação) {
    return JaveiroInfiltrado.concatenar(this.frase, continuação);
  }
  
  static concatenar(string1, string2) {
    return string1 + ' ' + string2;
  }
}

const javeiroInfiltrado = new JaveiroInfiltrado('Mais vale um pássaro na mão');

javeiroInfiltrado.digaAlgo('do que dois voando.');
// Mais vale um pássaro na mão do que dois voando.
```

Diferente da forma anterior que tínhamos um objeto, aqui queremos enviar o parâmetro "frase".

Pra variar um pouco vamos usar função, aproveitando que já sabemos o que é "closure".

```js
function concatenar(string1, string2) {
  return string1 + ' ' + string2;
}
  
function JaveiroDisfarçado(frase) {  
  function digaAlgo(continuação) {
    return concatenar(frase, continuação);
  }
  
  return { digaAlgo };
}

const javeiroDisfarçado = JaveiroDisfarçado('De grão em grão');

javeiroDisfarçado.digaAlgo('a galinha enche o papo.');
// De grão em grão a galinha enche o papo.
```

É, não tem nada demais, por que não estamos trabalhando com instâncias.

Não colocamos o concatenar dentro para dentro do JaveiroDisfarçado por alguns motivos:

- Pode ser reaproveitado, não está escondido em escopo.
- Pode ser testado
- Não fica privado, pra que você precisaria de uma função privada?

## Padrões de projeto

Tão bonito usar os famosos "Design Patterns" do livro GOF, eles foram criados para atender especificamente as necessidades da linguagem C++ no paradigma OO.

Os padrões de projeto devem ser usados para ajudar nas necessidade da linguagem e muitas não existem no Javascript.

Há dois livros bem famosos que eu conheço sobre os padrões de projeto em Javascript:
- Learning JavaScript Design Patterns
- Padrões JavaScript

### Get e Set em cada atributo

Sabe por que usamos sempre "gets" e "sets" em Java? Porque as vezes precisamos colocar uma validação e então mantemos um padrão de sempre chamar o método correspondente.

Em Javascript não precisamos chamar uma função para acessar o "get" e "set".

```js
const javeiroDisfarçado = {
  frase: 'Mente vazia, oficina do diabo.',
  get getFrase() {
    return this.frase;
  },
  set setFrase(frase) {
    this.frase = frase;
  }
}

javeiroDisfarçado.frase; // Mente vazia, oficina do diabo.
javeiroDisfarçado.getFrase; // Mente vazia, oficina do diabo.

javeiroDisfarçado.setFrase = 'Papagaio que acompanha joão-de-barro vira ajudante de pedreiro';
javeiroDisfarçado.frase; // Papagaio que acompanha joão-de-barro vira ajudante de pedreiro
```

Como da para perceber, com ou sem os métodos acessaríamos da mesma forma, então só criamos os "gets" e "sets" quando precisar.

## Forma de escrever

Agora vão reclamar que to pegando no pé.

### Aspas duplas em strings

Parece preciosismo.

```js
const frase = "Javeiro disfarçado";
const frase = 'Javeiro disfarçado';
```

Mas acontece que no JS manipulamos o HTML e lá é usado aspas duplas.

```js
const elemento = document.querySelector('data-js="javeiro"');
```

Se ali começasse com aspa dupla fecharia antes do desejado.

## Debugar

Costumo dizer que o debugger de javascript é o `console.log`, se no Java fosse interpretado como o Javascript tenho certeza que usariam essa praticidade lá também. Não digo que o debugger está excluído, mas na maioria dos casos ele da mais trabalho.

## Tratamento de erros

### Console.log

Espero que já tenham te falado, "console não é tratamento de erro". No backend faz sentido fazer um log de erro para podermos localizar a origem. No frontend você não vai escrever `console.log` ou `console.erorr` para o usuário, então podemos dar uma explicação visual para o usuário ou então apenas ignorar.
