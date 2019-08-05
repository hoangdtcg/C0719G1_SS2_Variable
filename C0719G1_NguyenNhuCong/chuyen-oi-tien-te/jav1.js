function show() {
    let vao=parseFloat(document.getElementById('from').value);
    let ra=parseFloat(document.getElementById('to').value);
    let amount=parseFloat(document.getElementById('amount').value);

    let sotien =amount*ra/vao;
    document.getElementById("sotien").innerHTML=( "so tien doi ra la :"+sotien);

}