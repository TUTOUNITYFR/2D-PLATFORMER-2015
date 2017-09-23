#pragma strict

var showGUI : boolean = false;
var canvas : GameObject;

function Update () {

if(Input.GetKeyDown(KeyCode.Escape)){
showGUI = !showGUI;
}

if(showGUI == true){
canvas.SetActive(true);
Time.timeScale = 0;
}else{
canvas.SetActive(false);
Time.timeScale = 1;
}

}

function OnLevelWasLoaded(){
 canvas = GameObject.Find("Canvas");
}