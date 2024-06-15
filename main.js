Webcam.set ({

    width: 350,
    height: 300,
    iamge_format: 'jpeg',
    jpeg_quality: 90
    
    })
    
    Camera = document.getElementById("camera");
    Webcam.attach(Camera);
    
    function TakeSnapshot() {
    
    Webcam.snap(function (data_uri) {
    
    document.getElementById("result").innerHTML = '<img id = "captured_image" src= "' + data_uri + '">';
    
    });
    
    }
    
    console.log("mlf version", ml5.version);
    
    Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sZJViNAM4/model.json",modelLoaded);
    
    function modelLoaded() {
    
    console.log("Model Loaded");
    }