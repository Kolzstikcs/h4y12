





function readMore(button, about){
    let btn = document.getElementById(button);

    btn.onclick = function(){
        let aboutInfo = document.getElementById(about);

        aboutInfo.classList.toggle('about-toggle');
    }
   

}

readMore('R1', 'about1');
readMore('R2', 'about2');
readMore('R3', 'about3');
readMore('R4', 'about4');
readMore('R5', 'about5');


function modeChange() {
    const ball = document.querySelector('.modeBall');
    const currentTransform = ball.style.transform;

    if (currentTransform === 'translateX(25px)') {
        ball.style.transform = 'translateX(0px)';
    } else {
        ball.style.transform = 'translateX(25px)';
    }
}
