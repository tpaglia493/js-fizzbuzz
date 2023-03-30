let numberInsideTheBox;

for (i = 0; i <= 100; i++) {

    numberInsideTheBox = i;

    if (numberInsideTheBox % 3 == 0) {

        if (numberInsideTheBox % 5 == 0) {
            numberInsideTheBox = "FIZZ-BUZZ"
        }else { numberInsideTheBox = "FIZZ"
     }
    
    }else if (numberInsideTheBox % 5 == 0) {
         numberInsideTheBox == "BUZZ" }



    //HTML MODIFIER
    document.getElementById("container-of-boxes").innerHTML += `
    <div class="col-1 card" style="height:100px; width:100px">
        <p class="m-auto">${numberInsideTheBox}</p>
    </div>`
}