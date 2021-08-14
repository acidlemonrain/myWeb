import { canvasEnhanced, getColorByTime } from "../../utils";
import { DisappearedLoading } from 'react-loadingg';
import  { throttle } from 'underscore';
import jQuery from "jquery";
import bgImg from '../../image/12.jpg'
import './index.css'
let img = new Image()
img.onload = ()=>{
     // remove mask
     jQuery('#spinner')[0].style.display = 'none'
}
img.src = bgImg
const boardStyle = {
    height: '35vh',
    width: '100%',
    backgroundImage: `url(${bgImg})`,
}

let bgColor = "white"
let mouseSpeed = 0
initSpeed()
function initSpeed() {
    var lastmousex = -1;
    var lastmousey = -1;
    var mousetravel = 0;
    let go = (e) => {
        var mousex = e.pageX;
        var mousey = e.pageY;
        if (lastmousex > -1)
        mousetravel = Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
        mouseSpeed = mousetravel/100
        lastmousex = mousex;
        lastmousey = mousey;
    }
    go = throttle(go,100)
    jQuery('html').mousemove(function (e) {
        go(e)
    });
    jQuery('html').mouseleave(function () {
       setTimeout(() => {
        mouseSpeed = 0
       }, 100);
    })
}

setTimeout(() => {

    let ele = jQuery('#border')[0]
    bgColor = getColorByTime()
    jQuery('#border')[0].style.backgroundColor = bgColor
    canvasEnhanced()
    drawCavas()
    jQuery('#border')[0].onmousemove = function (event) {
        let Y = parseInt(event.clientY - (window.pageYOffset + ele.getBoundingClientRect().top))
        let maxY = ele.clientHeight
        let percentY = (Y / maxY).toFixed(2)
        console.log(percentY);
        jQuery('#border')[0].style.backgroundPosition = `100% ${percentY * 100}%`
    }
}, 100)


function drawCavas() {
    let tick = 0
    let cacheSpeed = 0
    requestAnimationFrame(go)
    function go() {

        let speed = (cacheSpeed * 0.8 + mouseSpeed * 0.2) 
        let canvas = jQuery('#canvas')[0]
        let ctx = canvas.getContext('2d')
        const rad = canvas.height * 0.5;
        const text = "HELLO  NICE TO MEET YOU";
        const fontSize = 16;
        const centX = canvas.width / 2;
        const centY = canvas.height / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.font = fontSize + "px arial";
        // ctx.textAlign = "center";
        // ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "#666";

        // Text under stretched from Math.PI to 0 (180 - 0 deg)
        ctx.fillCircleText(text, centX, centY, rad, Math.PI * 0.9 + tick, tick);
        tick += (speed * 0.1)
        cacheSpeed = mouseSpeed
        requestAnimationFrame(go)
    }
}

function Index() {
    return (
        <div>
            <div id='border' className={"board"} style={{ ...boardStyle }}>
                <div id="spinner"> <DisappearedLoading></DisappearedLoading> </div>
            </div>

            <canvas id="canvas" width="2000" height="400" className={"canvas"}></canvas>

        </div>
    );
}

export default Index;
