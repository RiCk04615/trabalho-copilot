const { calcularTotalComDesconto } = require('./calculadora');

// Gerado com o prompt: "Escreva três testes unitários usando Jest para a função calcularTotalComDesconto, cobrindo um cenário sem desconto, um cenário com desconto de 10% e um cenário com carrinho vazio."

test('Cenário 1: Não deve aplicar desconto para valores menores ou iguais a 100', () => {
    const itens = [
        { preco: 50, quantidade: 1 },
        { preco: 10, quantidade: 2 }
    ]; // Total = 70
    expect(calcularTotalComDesconto(itens)).toBe("70.00");
});

test('Cenário 2: Deve aplicar desconto de 10% para valores maiores que 100', () => {
    const itens = [
        { preco: 100, quantidade: 1 },
        { preco: 50, quantidade: 1 }
    ]; // Total = 150 -> Com desconto = 135
    expect(calcularTotalComDesconto(itens)).toBe("135.00");
});

test('Cenário 3: Deve retornar 0.00 para carrinho vazio', () => {
    const itens = [];
    expect(calcularTotalComDesconto(itens)).toBe("0.00");
});
