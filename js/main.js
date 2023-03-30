

for (let i = 0; i <= 100; i++) {

   

    if (i % 3 == 0) {

        if (i % 5 == 0) {
            //""
            //HTML MODIFIER
            document.getElementById("container-of-boxes").innerHTML += `
            <div class="col-1 card" style="height:100px; width:100px">
                <p class="m-auto">FIZZ-BUZZ</p>
            </div>`
        } else {
            //"FIZZ"
            //HTML MODIFIER
            document.getElementById("container-of-boxes").innerHTML += `
            <div class="col-1 card" style="height:100px; width:100px">
                <p class="m-auto">FIZZ</p>
            </div>`

        }

    } else if (i % 5 == 0) {
        //"BUZZ"
        //HTML MODIFIER
        document.getElementById("container-of-boxes").innerHTML += `
    <div class="col-1 card" style="height:100px; width:100px">
        <p class="m-auto">BUZZ</p>
    </div>`
    }

//TO FIX : IT MUST NOT PRINT ì WHEN FIZZ, BUZZ OR FIZZBUZZ

    //HTML MODIFIER
    document.getElementById("container-of-boxes").innerHTML += `
    <div class="col-1 card" style="height:100px; width:100px">
        <p class="m-auto">${i}</p>
    </div>`
}