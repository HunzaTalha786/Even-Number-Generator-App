function generateEven(){
    let inputValue = document.getElementById('inputValue').value;
    let i = 0;
    let value = '';
    while (i <= inputValue) {
        if(i % 2 === 0){
            value += `${i} ,`;
        }
        i++;
    }
    document.getElementById('results').innerHTML=`${value}`;
}
function restart(){
    document.getElementById('results').innerHTML= "";
    document.getElementById('inputValue').value ="";
}