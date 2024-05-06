var eidDate ='16 - June - 2024';

document.getElementById("eidDate").innerText = eidDate;
var inputs = document.querySelectorAll("input")

function count(){
    var eidDay = new Date("16 june 2024") 
    var date = new Date ();
    var diff = eidDay - date
    var days = Math.floor(diff /( 1000 * 60 * 60 * 24));
    var hours = Math.floor(diff /( 1000 * 60 * 60));
    var minutes = Math.floor(diff /( 1000 * 60));
    var second = Math.floor(diff / 1000);
    console.log(second);
    inputs[0].value = Math.floor(diff /( 1000 * 60 * 60 * 24));
    inputs[1].value = Math.floor(diff /( 1000 * 60 * 60));
    inputs[2].value = Math.floor(diff /( 1000 * 60));
    inputs[3].value = Math.floor(diff / 1000 );
}

count()


setInterval(
    () => {
        count()
    },
    1000
)