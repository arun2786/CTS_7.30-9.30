
import React from 'react';

    const About =(props)=>{
        console.log(props);
        setTimeout(function(){
            console.log("hello");
            props.history.push("/");
        }, 5000);
        return (
            <div className="container">
                <button className="btn btn-success" >Go Home</button>
                <h3 className="text-primary text-center">About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio impedit labore voluptate, autem distinctio aspernatur iste nostrum qui ad et repudiandae quis laudantium! Obcaecati, doloribus tempora. Eaque, explicabo similique!</p>
            </div>
        );
}

export default About;
