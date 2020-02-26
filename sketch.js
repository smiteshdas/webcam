let video;
let classifier;
let div;



function setup(){
  noCanvas()
  div = createP('Loading..')
  
  video= createCapture(VIDEO);
  video.size(240,320)
  classifier = ml5.imageClassifier('MobileNet',video, modelLoaded);
  
  }

function modelLoaded(){
  div.html('Model is Ready')
  classifier.classify(gotResults);
  }

function gotResults(err,results){
  if(err){
    div.html('Error')
    }else{
  
      div.html(results[0].label)
      classifier.classify(gotResults)
      }
  
    }
