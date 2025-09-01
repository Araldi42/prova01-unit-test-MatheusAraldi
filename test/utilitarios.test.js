const Utilitarios = require("../src/utilitarios")

describe ("Teste da classe Utilitarios", () => {
    let utilitarios;

    beforeEach(() => {
        utilitario = new Utilitarios;
    })

    test('Deve inverter String', () => {
        expect(utilitario.inverterString("onibus")).toBe("subino");
    })

    test('Deve contar caracteres', () => {
        expect(utilitarios.contarCaracteres('um')).toBe(2);
    })

    test('Deve converter uma string para maiúscula', () => {
        expect(utilitarios.paraMaiusculas('teste')).toBe('TESTE');
        expect(utilitarios.paraMaiusculas('Teste')).toBe('TESTE');
        expect(utilitarios.paraMaiusculas('TESTE')).toBe('TESTE');
    })

    test('Deve convereter uma string para minúscula', () => {
        expect(utilitarios.paraMinusculas('TESTE')).toBe('teste');
        expect(utilitarios.paraMinusculas('TESTe')).toBe('teste');
        expect(utilitarios.paraMinusculas('TesTE')).toBe('teste');
    })

    test('Deve converter a primeira letra de uma string para minúscula', () => {
        expect(utilitarios.primeiraLetraMaiuscula('abcd')).toBe('Abcd');
        expect(utilitarios.primeiraLetraMaiuscula('ABCD')).toBe('ABCD');
        expect(utilitarios.primeiraLetraMaiuscula('aBCD')).toBe('ABCD');
    })

    test('Deve somar 2 variáveis', () => {
        expect(utilitarios.somar(1, 2)).toBe(3);
        expect(utilitarios.somar(2, -1)).toBe(1);
        expect(utilitarios.somar(100, 20)).toBe(120);
    })

    test('Deve subtrair 2 variáveis', () => {
        expect(utilitarios.subtrair(2, 1)).toBe(1);
        expect(utilitarios.subtrair(4, 2)).toBe(2);
        expect(utilitarios.subtrair(-4, -5)).toBe(-9);
    })

    test('Deve multiplicar 2 variáveis', () => {
        expect(utilitarios.multiplicar(4, 2)).toBe(8);
        expect(utilitarios.multiplicar(4, -2)).toBe(-8);
        expect(utilitarios.multiplicar(10, 0)).toBe(0);
    })

    test('Deve dividir 2 variaveis desde que uma delas não seja 0', () => {
        expect(utilitarios.dividir(2, 1)).toBe(2);
        expect(utilitarios.dividir(16, 2)).toBe(8);
        expect(utilitarios.dividir(2, 0)).toBe(Error);  
    })

    test('Deve receber um número e dizer se é par', () => {
        expect(utilitarios.ehPar(2)).toBe(true);
        expect(utilitarios.ehPar(5)).toBe(false);
    })

    test('Deve retornar o primeiro elemento de um array', () => {
        expect(utilitarios.primeiroElemento([0, 1])).toBe(0);
        expect(utilitarios.primeiroElemento([2])).toBe(2);
    })

    test('Deve retornar o ulimo Elemento de um array', () => {
        expect(utilitarios.ultimoElemento([0, 1])).toBe(1);
        expect(utilitarios.ultimoElemento([1])).toBe(1);
    })

    test('Deve retornar o tamano de um array', () => {
        expect(utilitarios.tamanhoArray([0, 1, 2])).toBe(3);
        expect(utilitarios.tamanhoArray([0])).toBe(1);
    })

    test('Deve ordenar um array', () => {
        expect(utilitarios.ordenarArray([1, 4, 3, 0])).toBe([0, 1, 3, 4]);
        expect(utilitarios.ordenarArray(['B', 'A', 'C'])).toBe(['A', 'B', 'C']);
    })

    test('Deve inverter um array pela sua ordem', () => {
        expect(utilitarios.inverterArray([1, 2, 3])).toBe([3, 2, 1]);
        expect(utilitarios.inverterArray(['A', 'B', 'C'])).toBe(['C', 'B', 'D']); 
    })

    test('Deve gerar um numero Aleatorio multiplicado por 100 que é o máximo', () => {
        expect(utilitarios.gerarNumeroAleatorio())
    })

    test('Deve validar se uma variável é um número', () => {
        expect(utilitarios.ehNumero(1)).toBe(true);
        expect(utilitarios.ehNumero('A')).toBe(false);
    })

    test('Deve remover espaços de uma string', () => {
        expect(utilitarios.removerEspacos(' FRASE')).toBe('FRASE');
        expect(utilitarios.removerEspacos('UM ')).toBe('UM');
    })

    test('Deve repetir uma string por quantas vezes for recebida no método', () =>{
        expect(utilitarios.repetirTexto('A', 2)).toBe('AA');
    })

    test('Deve Juntar Array em uma string', () => {
        expect(utilitarios.juntarArray(['maça', 'pera', 'banana'])).toBe('maça, pera, banana');
    })

    test('Conta palavras de um input de uma variável string', () => {
        expect(utilitarios.contarPalavras('dois')).toBe(4);
    })

    test('Deve retornar a média de numeros em um array, desde que o comprimento não seja 0', () => {
        expect(utilitarios.mediaArray([4, 4])).toBe(4);
    })

    test('Deve remover duplicados de um array', () => {
        expect(utilitarios.removerDuplicados([1, 1, 2, 3])).toBe([1, 2, 3]);
    })

    test('Deve ver se uma string em variável é um Palindromo', () => {
        expect(utilitarios.ehPalindromo('subinoonibus')).toBe(true);
    })

    test('Deve mesclar objetos json em um só', () => {
        expect(utilitarios.mesclarObjetos(
            {a:1, b:2},
            {b: 3, c:5}
        )).toBe({a:1, b:2, b:3, c:5})
    })
})