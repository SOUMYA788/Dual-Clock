/*OPPENNING SCRIPT FOR ANALOG*/
// let sound = new Audio('../sound/ticktock.wav')
// console.log(sound);
// sound.play()


// setInterval(() => {
//     sound.play()
// }, 0);

setInterval(() => {


    d = new Date;
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    hrotation = 30 * hTime + mTime / 2;
    mrotation = 6 * mTime;
    srotation = 6 * sTime;


    Hour.style.transform = `rotate(${hrotation}deg)`;
    Minutes.style.transform = `rotate(${mrotation}deg)`;
    Seconds.style.transform = `rotate(${srotation}deg)`;



}, 100);




// function tickTock() {
//     let tickSound = new Audio('sound/ticktock.mp3')
//     tickSound.play();
// }
/*CLOSING ANALOG SCRIPT*/



/*STARTING DIGITAL CLOCK SCRIPT*/

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
    let Time = H + ':' + M + ':' + S + '&nbsp' + '(' + DN + ')';

    document.getElementById("clock2").innerHTML = Time + '<br>' + Dt
}
/*CLOSING DIGITAL CLOCK SCRIPT*/