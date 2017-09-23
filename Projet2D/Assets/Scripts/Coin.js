#pragma strict

private var score : Score;

function Start () {
score = GameObject.FindGameObjectWithTag("Player").GetComponent(Score);
}

function OnTriggerEnter2D (other : Collider2D){

if(other.tag == "Player"){
score.coins += 1;
Destroy(gameObject);
}

}