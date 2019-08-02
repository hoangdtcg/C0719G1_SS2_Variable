function convert() {
    let amount=document.getElementById('Amount').value;
    let from= document.getElementById('From').value;
    let to=document.getElementById('To').value;

    let result=amount*to/from;
    document.getElementById('Result').innerHTML="Result: "+result;

}