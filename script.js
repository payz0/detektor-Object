let img
let detector,video

function preload(){
    img = loadImage('image/entah.jpg');
    detector = ml5.objectDetector('cocossd')
}

function gethasil(err,result){
    if(err){
        console.log(err)
    }

    console.log(result)
    for(let i = 0; result?.length > i; i++){
        let objek = result[i]
        stroke(0,255,0)
        strokeWeight(4)
        noFill()
        rect(objek.x, objek.y, objek.width, objek.height)
        fill(255)
        textSize(30)
        text(objek.label, objek.x+10, objek.y+40)
    }
    detector.detect(video,gethasil)
}

function setup(){
    // createCanvas(img.width,img.height)
    // image(img,0,0)
    // detector.detect(img,gethasil)
    createCanvas(640,480);
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide()
    detector.detect(video,gethasil)
}

function draw(){
    image(video,0,0)
}