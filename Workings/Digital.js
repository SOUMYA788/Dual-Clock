const Option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(clock, 100)

function clock() {
    let a = new Date;
    let H = a.getHours();
    let S = a.getSeconds();
    let M = a.getMinutes();
    let milis = a.getMilliseconds();

    let DN = "AM"
    if (H == 0) { H = 12; }
    if (H > 12) {
        H = H - 12;
        DN = "PM"
    }
    if (H < 10) { H = '0' + H }
    if (S < 10) { S = '0' + S }
    if (M < 10) { M = '0' + M }
    let Dt = a.toLocaleDateString(undefined, Option);

    document.getElementById("Hour").innerHTML = H
    document.getElementById("Minutes").innerHTML = M
    document.getElementById("Seconds").innerHTML = S

    document.getElementById("clock2").innerHTML = Dt
}