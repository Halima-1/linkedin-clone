import React, { useState } from 'react'
import "../styles/landing.scss"
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

function Landing() {
    const [index,setIndex] =useState(localStorage.getItem("index")? JSON.parse(localStorage.getItem("index")): 0)

    const nextCarousel = ()=>{
        setIndex(index + 1)
        localStorage.setItem("index", index)
    }
    const prevCarousel = ()=>{
        setIndex(index - 1)
        localStorage.setItem("index", index)
    }
//     if(index ===0){
//         document.getElementById("open").innerHTML =`
//     <BiChevronRight onclick={nextCarousel}/>
// `
//     }
     if(index === 1){
        document.getElementById("open").innerHTML =`
        <div class="icon">
        <svg onClick="prevCarousel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
      
      <svg onClick="nextCarousel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
</div>
        <div id='open-text'>
        
<h2>
    Conversation today may lead to opportunities tomorrow.
</h2>
<p>Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career. </p>
</div>
<div id="open-img">
</div>


`
    }

    else if(index === 2){
        document.getElementById("open").innerHTML =`
        <div class="icon">
        <svg onClick={prevCarousel} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
      
      <svg onClick={nextCarousel} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
</div>
        <div id='open-text'>

<h2>
    Stay up to date on your Industry .
</h2>
<p>From live videos to stories to newsletters and more, LinkedIn is full of ways to stay upto date on latest discussions in your industry. </p>
</div>
<div id="open-img">
</div>`

    }
    // else{
    //     return
    // }
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
        <section className="explore content">
            <div className='explore-text'>
                <h2>Explore top linkedIn content</h2>
                <p>Discover relevant posts and expert insights - <br /> curated by topic and in one place</p>
            </div>
            <div className="explore-btn">
                <button>Career</button>
                <button>Productivity</button>
                <button>Finance</button>
                <button>Soft skills & Emotional Intelligence</button>
                <button>Project management</button>
                <button>Education</button>
                <button>Technology</button>
                <button>Leadership</button>
                <button>Ecommerce</button>
                <button>Show all</button>
            </div>
        </section>
        <section className="explore">
            <div className='explore-text'>
                <h2>Find the right Job or Internship for you</h2>
            </div>
            <div className="explore-btn">
                <button>Engineering</button>
                <button>Business development</button>
                <button>Finance</button>
                <button>Administrative Assistant</button>
                <button>Retail Associate</button>
                <button>Customer Service</button>
                <button>Operations</button>
                <button>Information Technology</button>
                <button>Marketing</button>
                <button>Show more</button>
            </div>
        </section>
        <section className='post'>
            <h2>
                Post your Jobs for millions of people to see
            </h2>
            <button>Post a Job</button>
        </section>
        <section className="explore">
            <div className='explore-text'>
                <h2>Discover the best software tools</h2>
                <p>Connect with buyers who have first-hand experience to find the best products for you</p>
            </div>
            <div className="explore-btn">
                <button>E-commerce platform</button>
                <button>CRM Software</button>
                <button>Human Resources Management system</button>
                <button>Recruiting software</button>
                <button>Project Management Moftware</button>
                <button>Project Management Software</button>
                <button>Help Desk Software</button>
                <button>Social Networking Software</button>
                <button>Desk Publishing Software</button>
                <button>Show all</button>
            </div>
        </section>
        <section className="explore">
            <div className='explore-text'>
                <h2>Keep your mind sharp with Games</h2>
            </div>
            <div className="explore-btn">
                <button>Pinpoint</button>
                <button>Queen</button>
                <button>Crossclimb</button>
                <button>Tango</button>
                <button>Zip</button>
                <button>Mini Sudoku</button>
            </div>
        </section>
        <section id="open">
        <div id='open-text'>
        <div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

<svg onClick={nextCarousel} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</div>
        <h2>
            Let the right people know you are open to work
        </h2>
        <p>With the open to work feature, you can privately tell recruiters or publicly share with the linkedIn community that you're looking for new job opportunities. </p>
    </div>
    <div id="open-img">
        <img src="../src/assets/open to work.jpg" alt="open to work image" />
    </div>
        </section>
        <section className="explore">
            <div className='explore-text'>
                <h2>Discover the best software tools</h2>
                <p>Connect with buyers who have first-hand experience to find the best products for you</p>
            </div>
            <div className="explore-btn">
                <button>E-commerce platform</button>
                <button>CRM Software</button>
                <button>Human Resources Management system</button>
                <button>Recruiting software</button>
                <button>Project Management Moftware</button>
                <button>Project Management Software</button>
                <button>Help Desk Software</button>
                <button>Social Networking Software</button>
                <button>Desk Publishing Software</button>
                <button>Show all</button>
            </div>
        </section>
        <section className="explore">
            <div className='explore-text'>
                <h2>Keep your mind sharp with Games</h2>
            </div>
            <div className="explore-btn">
                <button>Pinpoint</button>
                <button>Queen</button>
                <button>Crossclimb</button>
                <button>Tango</button>
                <button>Zip</button>
                <button>Mini Sudoku</button>
            </div>
        </section>
        </>
    )
}

export default Landing
