using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Createball : MonoBehaviour
{
    //Class variables to be bla bla bla
    [SerializeField] GameObject ball;
    [SerializeField] float delay;
    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("DropBall", 0.5f, delay);
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void DropBall()
    {
        Vector3 pos = new Vector3(Random.Range(-10.0f, 10.0f), 6, 0);
        GameObject obj= Instantiate(ball, pos, Quaternion.identity);
        Destroy(obj,5);

    }
}
