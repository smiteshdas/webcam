let video;
let classifier;
let div;
let speech;



function setup(){
  noCanvas()
  div = createP('Loading..')
  
  video= createCapture(VIDEO);
  video.size(240,320)
  classifier = ml5.imageClassifier('MobileNet',video, modelLoaded);
  speech = new p5.Speech();
  
  }

function modelLoaded(){
  div.html('Model is Ready')
  classifier.classify(gotResults);
  }

function gotResults(err,results){
  if(err){
    div.html('Error')
    }else{
  speech = new p5.Speech(); // speech synthesis object
speech.speak(results[0].label);
      div.html('There is a '+ results[0].label)
      classifier.classify(gotResults)
      }
  
    }
