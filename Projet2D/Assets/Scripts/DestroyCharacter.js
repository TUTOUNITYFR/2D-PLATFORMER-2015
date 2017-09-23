#pragma strict

function Update () {

   if(Application.loadedLevelName == "MainMenu"){
     Destroy(gameObject);
   }

}