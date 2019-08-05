function show(){
    let a = parseFloat(document.getElementById('so1').value);
    let b = parseFloat(document.getElementById('so2').value);
    let c = parseFloat(document.getElementById('so3').value);
    if (a<b+c || b<c+a || c<a+b){

        document.getElementById('tk').innerHTML='day la tam giac thuong';
    }
        if (a==b || c==b|| c==a)
    {
        document.getElementById('tk').innerHTML=('day la tam giac deu');
    }
    else if (a == b && b == c){
            document.getElementById('tk').innerHTML=('day la tam giac can');
    }

    else if ((a*a==b*b+c*c) || b*b==a*a+c*c || a*a+b*b==c*c){
        if (a==b || c==b|| c==a) {
            document.getElementById('tk').innerHTML=('day la tam giac vuong can')
        }
        else {
            document.getElementById('tk').innerHTML=('day la tam giac vuong')
        }
        }
    else {
            document.getElementById('tk').innerHTML=(' khong thoa man dieu kien la tam giac')
    }
}