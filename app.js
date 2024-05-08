var eidDate = '16 - June - 2024';

document.getElementById("eidDate").innerText = eidDate;
var inputs = document.querySelectorAll("input")

function count() {
    var eidDay = new Date("16 june 2024")
    var date = new Date();
    var diff = eidDay - date
    if (diff <= 0) {
        inputs[0].value = "00"
        inputs[1].value = "00"
        inputs[2].value = "00"
        inputs[3].value = "00"
        return document.getElementById("eidi").innerText = "Eid Mubarak"
    } else {
        inputs[0].value = Math.floor(diff / (1000 * 60 * 60 * 24));
        inputs[1].value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        inputs[2].value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        inputs[3].value = Math.floor((diff % (1000 * 60)) / 1000);

    }
}

count()

setInterval(

    () => {
        count()
    },
    1000
)