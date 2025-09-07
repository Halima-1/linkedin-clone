import React from 'react'
import "../styles/landing.scss"

function Landing() {
    return (
        <>
        <section className='hero'>
            <div className='hero-text'>
                <h2>Welcome to your professional community</h2>
                <button className='google'>
                    <p>
                    <b>Continue as Halima</b> <br />
                    <span>dahunsiolajumoke18@gmail.com</span> 
                    </p>
                {/* <span className="google"> */}
                    <img src="../src/assets/google logo.png" alt="google logo" />
                    {/* </span>  */}
                   
                </button>
                <button className='microsoft'>
                    <img src="../src/assets/microsoft.png" alt="google logo" />
                    <b>Continue with microsoft</b>
                </button>
                <button><b>Sign in with email</b></button>
                <p className='term'>By clicking continue to join, you agreed to <a href=""><b>LinkedIn's User Agreement,
                    </b></a> <a href=""><b>Privacy policy</b></a> and
                <a href=""><b>Cookie policy</b></a>
                </p>
                <p className='term'>New to LinkedIn? <a href=""><b>join now</b></a></p>
            </div>
            <div className="hero-img">
                <img src="../src/assets/hero image.jpg" alt="man holding laptop avatar" />
            </div>
        </section>
        <section className="explore">
            <div className='explore-text'>
                <h2>Explore top linkedin content</h2>
                <p>Discover relevant posts and expert insights - <br /> curated by topic and in one place</p>
            </div>
            <div className="explore-btn">
                <button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button>
            </div>
        </section>
        </>
    )
}

export default Landing
