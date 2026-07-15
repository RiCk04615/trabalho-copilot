// Gerado com o prompt: "Crie uma função em JavaScript que recebe um array de produtos com preco e quantidade, aplica um desconto de 10% se o valor total passar de 100 reais, e retorna o valor final formatado com duas casas decimais."
function calcularTotalComDesconto(itens) {
    if (!itens || itens.length === 0) {
        return "0.00";
    }

    let total = 0;
    for (let item of itens) {
        total += item.preco * item.quantidade;
    }

    if (total > 100) {
        total = total * 0.9; // Aplica 10% de desconto
    }

    return total.toFixed(2); // Retorna com 2 casas decimais (ex: "90.00")
}

module.exports = { calcularTotalComDesconto };