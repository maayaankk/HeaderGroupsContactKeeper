import React from 'react'

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p className="my-1">
                This is a full stack MERN app for keeping contacts <br />
                Author: Mayank Chotaliya
            </p>
            <p style={{ marginBottom: 30 }} className='bg-light'>Email:- mayankchotaliya2001@gmail.com</p>

            <a className='bg-light' href="https://headerjs.web.app">Header Group</a>
            <a style={{ marginLeft: 40 }} className='bg-light' href="https://github.com/maayaankk">Github</a>
            <a style={{ marginLeft: 40 }} href="https://covid-19-tracker-56c78.web.app/" className='bg-light'>Covid-19</a>

            <p style={{ marginTop: 30 }} className="bg-dark">
                <strong>Version: </strong> 1.0.0
            </p>

        </div>
    )
}

export default About
