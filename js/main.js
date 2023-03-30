

for (let i = 1; i <= 100; i++) {



    if (i % 3 == 0) {

        if (i % 5 == 0) {
            //"FIZZ-BUZZ"
            //HTML MODIFIER
            document.getElementById("container-of-boxes").innerHTML += `
            <div class="col-1 card bg-fizz-buzz" >
                <p class="m-auto">FIZZ-BUZZ</p>
            </div>`
        } else {
            //"FIZZ"
            //HTML MODIFIER
            document.getElementById("container-of-boxes").innerHTML += `
            <div class="col-1 card bg-fizz" >
                <p class="m-auto">FIZZ</p>
            </div>`

        }

    } else if (i % 5 == 0) {
        //"BUZZ"
        //HTML MODIFIER
        document.getElementById("container-of-boxes").innerHTML += `
    <div class="col-1 card bg-buzz" >
        <p class="m-auto">BUZZ</p>
    </div>`
    } else {
        //JUST A NUMBER
        //HTML MODIFIER
        document.getElementById("container-of-boxes").innerHTML += `
    <div class="col-1 card" >
        <p class="m-auto">${i}</p>
    </div>`}
}