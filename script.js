var canvas = undefined;
var ctx = undefined;
var hw,hh,radius;
var color = "black";
var ss = document.getElementById("startstop");
var recog = new webkitSpeechRecognition();
recog.continuous = false;
recog.interimResults = true;
recog.lang = "en";
var words;

window.onload = init;


function init(){
    canvas = document.getElementById("drawingCanvas");
    ctx = canvas.getContext("2d");
    hw = canvas.width/2;
    hh = canvas.height/2;
    radius = 25;
    drawCirc(radius,color);
}

function drawCirc(radius = "25",color = "black"){
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(hw,hh,radius,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function changeJob(){
    if (ss.value === "Speak"){
        ss.value = "Stop";
        listen();
    }
    else{
        ss.value = "Speak";
        stopListen();
    }
}

recog.onresult = function(event){
    console.log("started");
        for (var x = event.resultIndex; i < e.results.length; x++){
            if (e.results[x].isFinal){
                words += event.results[x][0].transcript;
            }
        }
        if (callback) {
        callback(null, {
            transcript: event.results[0][0].transcript,
            confidence: event.results[0][0].confidence
        });
    }
        
    }
function listen(){
    console.log("Listening!");
    
    recog.start();
    console.log("Result " + words);
}

function stopListen(){
    console.log("Stopped!");
    recog.abort();
}