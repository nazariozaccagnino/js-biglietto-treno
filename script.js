let km = parseInt(prompt('Quanti km vuoi percorrere?'));
let age = parseInt(prompt('Quanti anni hai?'));
let price = km * 0.21;
console.log(price, 'prezzointero');
let finalprice

if (age <= 17){
    finalprice = price - ((price * 20) / 100);
    console.log(finalprice, 'prezzo20');
} 
else if(age >= 65){
    finalprice = price - ((price * 40) / 100);
    console.log(finalprice, 'prezzo40');
}
else{ 
    finalprice = price
}

document.getElementById('outputprice').innerHTML = finalprice.toPrecision(4);
