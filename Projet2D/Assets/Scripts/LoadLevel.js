#pragma strict

var levelname : String = "Enter Level Name here";

function OnTriggerEnter2D (other : Collider2D) {

  if(other.tag == "Player"){
     Application.LoadLevel(levelname);
  }

}