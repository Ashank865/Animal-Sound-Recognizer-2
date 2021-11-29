function start_classification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BMecxO0Rx/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    console.log("Got the result");
    console.log(results);
}