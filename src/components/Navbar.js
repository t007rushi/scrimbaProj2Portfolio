import React from 'react'


export default function Navbar() {
    return (
        <div className='nav'>
            <img src="./images/pic.jpg" alt="profile"  width="250px"/>
            <h4>Rushikesh Tarapure</h4>
            <h6>Frontend Developer</h6>
            <a href="www.rushi-tara.netlify.com"> www.rushi-tara.netlify.com</a><br />
            <button>Email</button>
            <button>Github</button>
        </div>
    )
}

//import way put images folder in src
//path way put -//- in public