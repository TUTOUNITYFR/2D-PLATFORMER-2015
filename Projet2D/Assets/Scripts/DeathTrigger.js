#pragma strict

var position : Vector2;
var platforms : GameObject[];

function Start(){
	platforms = GameObject.FindGameObjectsWithTag("Falling Platform");
}

function OnTriggerEnter2D (other : Collider2D) {

  if(other.tag == "Player"){
    other.transform.position = position;
    
    for (var x in platforms){
    	var fallingplatform = x.GetComponent(fallingplatform);
    	fallingplatform.Reset();
    }
  }
  
}