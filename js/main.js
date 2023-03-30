let numberInsideTheBox;

for(i=1; i<=100; i++){
    document.getElementById("container-of-boxes").innerHTML+= `
    <div class="col-1 card" style="height:100px; width:100px">
        <p class="m-auto">${i}</p>
    </div>`
}