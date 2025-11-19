let snores;
let purrMeow;
let longPurr;
let amp1, amp2, amp3;

function preload() {
    snores = loadSound("assets/196255__lolamadeus__snoring-cat.wav");
    purrMeow = loadSound("assets/412016__skymary__cat-purring-and-meow.wav")
    longPurr = loadSound("assets/529605__chalicewell__katzenmix.wav");
}

function setup(){
    rectMode(CENTER);
    amp1 = new p5.Amplitude();
    amp1.setInput(snores);
    amp2 = new p5.Amplitude();
    amp2.setInput(purrMeow);
    amp3 = new p5.Amplitude();
    amp3.setInput(longPurr);
    createCanvas(400, 400);
    background(0);
}

function draw(){
    if(key==='1'){
        background(0);
       rect(width/2,height/2, amp1.getLevel()*width,300); 
    } else if(key==='2'){
        background(0);
       rect(width/2,height/2, amp2.getLevel()*width,200);
    } else if(key==='3'){
        background(0);
       rect(width/2,height/2, amp3.getLevel()*width,100);
    }
}

function keyPressed(){
    if (key === '1'){
        purrMeow.stop();
        longPurr.stop();
        snores.play();
    } else if (key === '2'){
        snores.stop();
        longPurr.stop();
        purrMeow.play();
    }if (key === '3'){
        snores.stop();
        purrMeow.stop();
        longPurr.play();
    }
}