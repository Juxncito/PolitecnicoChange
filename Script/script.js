function convertCurrency() {
    const amount = parseFloat(document.getElementById('Valor').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    let exchangeRate;
    switch (from) {
        case 'EUR':
            exchangeRate = 4.081;
            break;
        case 'USD':
            exchangeRate = 3.804; 
            break;
        case 'BRL':
            exchangeRate = 750; 
            break;
        default:
            exchangeRate = 1; 
    }

    const ConvertedAmount = amount * exchangeRate;
    
    function Intento(ConvertedAmount){
        if (typeof ConvertedAmount != 'number'){
            throw TypeError('klk');
        }
        return ConvertedAmount.toLocaleString('en-US');
    }
    
    document.getElementById('result').innerText = `El resultado de la conversión es: $${Intento(ConvertedAmount)} COP`;
}
