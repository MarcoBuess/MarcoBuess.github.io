function calc_age() {
    return Math.floor((new Date() - new Date("1986-8-18")) / 31557600000)
}

window.onload = function() {
    document.getElementById("age").innerHTML = calc_age();
}