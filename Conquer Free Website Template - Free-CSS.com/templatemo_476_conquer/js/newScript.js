
function mouseremoved(id){
    id.style.backgroundColor='#383e4c';
    id.style.color = 'white';
    
}
function myFunction(id){
    id.style.backgroundColor='#FFFFFF';
    id.style.color = 'black';
    
}
function sendButton(){
    var data = document.getElementsByClassName("form-control");
    var string = "";
    var hasMissings = false;
    var toReportMissings = "Missing : ";
    for(a = 0; a<data.length; a++){
        if(data[a].value.length < 1){
            hasMissings = true;
            toReportMissings += data[a].name.toUpperCase() + " " + "\n";
        }else{
            string += data[a].name.toUpperCase() + ": " + data[a].value + "\n";
        }
    }
    if(hasMissings){
        window.alert(toReportMissings);
    }else{
        window.alert(string);
    }
    
}
function greenButton(id){
    id.innerHTML = "Bazinga";
    id.style.backgroundColor = getRandomColor();

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function redButton(id){
    window.open("https://www.facebook.com/giorgi.sharia");
}

