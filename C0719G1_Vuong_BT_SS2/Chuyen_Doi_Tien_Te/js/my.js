function convert() {
    let amount=document.getElementById('Amount');
    let from= document.getElementById('From');
    let to=document.getElementById('To');

    if (from.value=="usd" && to.value=="vnd"){
        let result=amount.value*23700;
        document.getElementById('Result').innerHTML="Result: " + result;

    }else if (from.value=="vnd" && to.value=="usd"){
        let result=amount.value/23700;
        document.getElementById('Result').innerHTML="Result: " + result;
    }

}