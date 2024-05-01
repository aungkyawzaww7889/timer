// GET UI 
const gettimer = document.querySelector('.time');
const getshowtimes = document.getElementById('showtimes');
const gethour = document.getElementById('houres');
const getmin = document.getElementById('minutes');
const getsec = document.getElementById('secondes');
const getstart = document.getElementById('start');
const getreset = document.getElementById('reset');
const getshows = document.querySelector('.shows');
const getedits = document.getElementById('edit');
const getprogress = document.querySelector('.progress');
const grtprogressbar = document.querySelector('.progressbar');
const getmodal = document.querySelector('.modal');
const getcancel = document.getElementById('cancel');
const getdonebtn = document.getElementById('donebtn');


function showmodalbox(){
    getmodal.classList.add('shownavbars');
}

function removemodalbox(){
    getmodal.classList.remove('shownavbars');
}


gettimer.addEventListener('click',showmodalbox);
getcancel.addEventListener('click',removemodalbox);
getedits.addEventListener('click',showmodalbox);
getdonebtn.addEventListener('click',removemodalbox);







// const hourresults = parseInt(gethour.value);
// const minutesresults = parseInt(getmin.value);
// const secondresults = parseInt(getsec.value);


// timeraction();
function timeraction(){
  

    let hr = parseInt(gethour.value);
    let min =  parseInt(getmin.value);
    let sec = parseInt(getsec.value);

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    // let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;   

 
    getshowtimes.innerText = `${h} : ${m} : ${s} : 000`;
    getshows.innerText = `${h} : ${m} : ${s} : 000`;



}


getdonebtn.addEventListener('click',timeraction);
getstart.addEventListener('click',startaction);
getreset.addEventListener('click',resetfun);
getdonebtn.addEventListener('click',addremovedisabled);



function addremovedisabled(){
    // console.log();
    getreset.removeAttribute("disabled");
    getstart.removeAttribute('disabled');
    getstart.classList.add('removedisabled');
    getreset.classList.add('removedisabled');


}


let clearinter;

function startaction(){
   

        // ................

        let hr = parseInt(gethour.value);
        let min =  parseInt(getmin.value);
        let sec = parseInt(getsec.value);

        let [milliseconds,seconds,minutes,hours] = [1000,hr,min,sec];

        function displaytimer(e){
            // console.log('this is working');
            // console.log(e.target.duration);

            milliseconds -= 10;
            // console.log(milliseconds);

            if(milliseconds === 0){
                milliseconds = 1000;
                // console.log("this is millseconds" + milliseconds);

        
                seconds--;
                // console.log(seconds);
                if(seconds === 0){
                    seconds = 60;
                    // console.log("this is seconds" + seconds);

                    minutes--;
                    // console.log("this is minutes" + minutes);
                    if(minutes === 0){
                        minutes = 60;

                        hours--;
                    }
                }
            }

            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;
            let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

            getshowtimes.innerText = `${h} : ${m} : ${s} : ${ms}`;
            getshows.innerText = `${h} : ${m} : ${s} : ${ms}`;


        }

        clearinter = setInterval(displaytimer,10);



    // ----------------------
}





function resetfun(){   

    // console.log("hay");
    clearInterval(clearinter);
    getshowtimes.innerText = `00 : 00 : 00 : 000`;
    getshows.innerText = `00 : 00 : 00 : 00`;

}


// console.log(getshowtimes.innerHTML);






