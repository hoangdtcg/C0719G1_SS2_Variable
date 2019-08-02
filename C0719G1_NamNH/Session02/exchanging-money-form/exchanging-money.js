function exchangeMoney() {
    let amount = parseInt(document.getElementById("amount-money").value);
    let fromCurrency = document.getElementById("from-currency").value;
    let toCurrency = document.getElementById("to-currency").value;
    if(fromCurrency == toCurrency) {
        amount = amount;
    }
    if(fromCurrency == "VND" && toCurrency == "USD") {
        amount /= 23000;
    }
    if(fromCurrency == "USD" && toCurrency == "VND") {
        amount *= 23000;
    }
    let displayResult = document.getElementById("display-result").innerHTML = "Result = " + amount;
}