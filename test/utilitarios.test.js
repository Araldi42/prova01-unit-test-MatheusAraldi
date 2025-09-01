const Utilitarios = require("../src/utilitarios");

describe("Teste da classe Utilitarios", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  test("Deve inverter string", () => {
    expect(utilitarios.inverterString("onibus")).toBe("subino");
  });

  test("Deve contar caracteres", () => {
    expect(utilitarios.contarCaracteres("um")).toBe(2);
  });

  test("Deve converter uma string para maiúscula", () => {
    expect(utilitarios.paraMaiusculas("teste")).toBe("TESTE");
    expect(utilitarios.paraMaiusculas("Teste")).toBe("TESTE");
    expect(utilitarios.paraMaiusculas("TESTE")).toBe("TESTE");
  });

  test("Deve converter uma string para minúscula", () => {
    expect(utilitarios.paraMinusculas("TESTE")).toBe("teste");
    expect(utilitarios.paraMinusculas("TESTe")).toBe("teste");
    expect(utilitarios.paraMinusculas("TesTE")).toBe("teste");
  });

  test("Deve converter a primeira letra de uma string para MAIÚSCULA", () => {
    expect(utilitarios.primeiraLetraMaiuscula("abcd")).toBe("Abcd");
    expect(utilitarios.primeiraLetraMaiuscula("ABCD")).toBe("ABCD");
    expect(utilitarios.primeiraLetraMaiuscula("aBCD")).toBe("ABCD");
  });

  test("Deve somar 2 variáveis", () => {
    expect(utilitarios.somar(1, 2)).toBe(3);
    expect(utilitarios.somar(2, -1)).toBe(1);
    expect(utilitarios.somar(100, 20)).toBe(120);
  });

  test("Deve subtrair 2 variáveis", () => {
    expect(utilitarios.subtrair(2, 1)).toBe(1);
    expect(utilitarios.subtrair(4, 2)).toBe(2);
    expect(utilitarios.subtrair(-4, -5)).toBe(1);
  });

  test("Deve multiplicar 2 variáveis", () => {
    expect(utilitarios.multiplicar(4, 2)).toBe(8);
    expect(utilitarios.multiplicar(4, -2)).toBe(-8);
    expect(utilitarios.multiplicar(10, 0)).toBe(0);
  });

  test("Deve dividir 2 variáveis, exceto por zero", () => {
    expect(utilitarios.dividir(2, 1)).toBe(2);
    expect(utilitarios.dividir(16, 2)).toBe(8);
    expect(() => utilitarios.dividir(2, 0)).toThrow();
  });

  test("Deve verificar se um número é par", () => {
    expect(utilitarios.ehPar(2)).toBe(true);
    expect(utilitarios.ehPar(5)).toBe(false);
  });

  test("Deve retornar o primeiro elemento de um array", () => {
    expect(utilitarios.primeiroElemento([0, 1])).toBe(0);
    expect(utilitarios.primeiroElemento([2])).toBe(2);
  });

  test("Deve retornar o último elemento de um array", () => {
    expect(utilitarios.ultimoElemento([0, 1])).toBe(1);
    expect(utilitarios.ultimoElemento([1])).toBe(1);
  });

  test("Deve retornar o tamanho de um array", () => {
    expect(utilitarios.tamanhoArray([0, 1, 2])).toBe(3);
    expect(utilitarios.tamanhoArray([0])).toBe(1);
  });

  test("Deve ordenar um array", () => {
    expect(utilitarios.ordenarArray([1, 4, 3, 0])).toEqual([0, 1, 3, 4]);
    expect(utilitarios.ordenarArray(["B", "A", "C"])).toEqual(["A", "B", "C"]);
  });

  test("Deve inverter um array", () => {
    expect(utilitarios.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    expect(utilitarios.inverterArray(["A", "B", "C"])).toEqual(["C", "B", "A"]);
  });

  test("Deve gerar um número aleatório entre 0 e 100", () => {
    const num = utilitarios.gerarNumeroAleatorio();
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(100);
  });

  test("Deve validar se uma variável é um número", () => {
    expect(utilitarios.ehNumero(1)).toBe(true);
    expect(utilitarios.ehNumero("A")).toBe(false);
  });

  test("Deve remover espaços de uma string", () => {
    expect(utilitarios.removerEspacos(" FRASE")).toBe("FRASE");
    expect(utilitarios.removerEspacos("UM ")).toBe("UM");
  });

  test("Deve repetir uma string N vezes", () => {
    expect(utilitarios.repetirTexto("A", 2)).toBe("AA");
  });

  test("Deve juntar um array em uma string", () => {
    expect(utilitarios.juntarArray(["maça", "pera", "banana"], ", ")).toBe("maça, pera, banana");
  });

  test("Deve contar palavras de uma string", () => {
    expect(utilitarios.contarPalavras("dois")).toBe(1);
    expect(utilitarios.contarPalavras("uma duas três")).toBe(3);
  });

  test("Deve calcular a média de um array", () => {
    expect(utilitarios.mediaArray([4, 4])).toBe(4);
  });

  test("Deve remover duplicados de um array", () => {
    expect(utilitarios.removerDuplicados([1, 1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("Deve verificar se uma string é palíndromo", () => {
    expect(utilitarios.ehPalindromo("subinoonibus")).toBe(true);
    expect(utilitarios.ehPalindromo("banana")).toBe(false);
  });

  test("Deve mesclar dois objetos JSON", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 5 };
    expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 5 });
  });
});
