#pragma strict

var sound : AudioClip;

private var hasPlayed = false;

private var basePosition : Vector3;

// VARAIBLES ROTATION
private var x : float;
private var y : float;
private var z : float;

function Start(){
	basePosition = transform.position;
	x = transform.rotation.x;
	y = transform.rotation.y;
	z = transform.rotation.z;
}

function OnTriggerEnter2D (other : Collider2D) {

  if(other.tag == "Player"){
  
    if(hasPlayed == false){
      GetComponent.<AudioSource>().PlayOneShot(sound);
      hasPlayed = true;
    }
  
  transform.GetComponent.<Rigidbody2D>().isKinematic = false;
  
  }
}

function Reset(){
	transform.GetComponent.<Rigidbody2D>().isKinematic = true;
	transform.position = basePosition;
	transform.rotation.x = x;
	transform.rotation.y = y;
	transform.rotation.z = z;
	hasPlayed = false;
}



