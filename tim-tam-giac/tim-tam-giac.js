function show(){
    let a = parseFloat(document.getElementById('so1').value);
    let b = parseFloat(document.getElementById('so2').value);
    let c = parseFloat(document.getElementById('so3').value);

    if (a==b|| c==b)
    {
        alert('day la tam giac deu');
                                        }
         else if (a || b || c){

             alert('day la tam giac thuong');
                                                }
            else if (a == b || b == c){
                alert('day la tam giac can');
                                                    }
                else if (a == b && b == c) {
                    alert('day la tam giac deu');
                                                            }
                    else if ((a*a==b*b+c*c) || b*b==a*a+c*c || a*a+b*b==c*c){
                        alert('day la tam giac vuong')
                                        }
                        else {
                             alert(' khong thoa man dieu kien la tam giac')
        }
}
