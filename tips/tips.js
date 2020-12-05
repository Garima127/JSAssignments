function calc(){
    var a = document.getElementById('billamt').value;
    var t = document.getElementById('tipPerc').value;
    var tip = a * (t*0.01);
    var tot = +tip + +a;
    tot = tot.toFixed(2);
    console.log(typeof(tip));
    console.log(typeof(tot));
    document.getElementById('tipamt').innerHTML = tip;
    document.getElementById('totamt').innerHTML = tot;
} 