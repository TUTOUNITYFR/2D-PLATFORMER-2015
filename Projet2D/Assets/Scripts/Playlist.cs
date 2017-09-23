using UnityEngine;
using System.Collections;

public class Playlist : MonoBehaviour {

	Object[] myMusic;

	void Awake(){
		myMusic = Resources.LoadAll ("Music", typeof(AudioClip));
		GetComponent<AudioSource> ().clip = myMusic [0] as AudioClip;
	}

	void Start () {
		GetComponent<AudioSource> ().Play ();
	}
	
	void Update () {
		if (!GetComponent<AudioSource> ().isPlaying) {
			playRandomMusic();
		}
	}

	void playRandomMusic(){
		GetComponent<AudioSource> ().clip = myMusic [Random.Range (0, myMusic.Length)] as AudioClip;
		GetComponent<AudioSource> ().Play ();
	}
}