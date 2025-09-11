import React, { useEffect, useState } from 'react'
import "../styles/landing.scss"
import "../styles/landing.scss"

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import Header from '../components/header'
import { useNavigate, Link } from 'react-router-dom'
function Landing() {
    const [index,setIndex] =useState(localStorage.getItem("index")? JSON.parse(localStorage.getItem("index")): 0)
    const navigate =useNavigate()
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
let carousel ;
if (index ===0){
    carousel =<>
     <div class="icon">
<BiChevronLeft className='hide' />

<BiChevronRight onClick={nextCarousel}/>

</div>
     <div id='open-text'>
        <h2>
            Let the right people know you are open to work
        </h2>
        <p>With the open to work feature, you can privately tell recruiters or publicly share with the linkedIn community that you're looking for new job opportunities. </p>
    </div>
    <div id="open-img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RkPTBcKCClXkFq5SZokofF08Ahe9X2DZFA&s" alt="open to work image" />
    </div>
    </>
}
     else if(index === 1){
carousel =<>
<div className="icon">
<BiChevronLeft onClick={prevCarousel}/>

<BiChevronRight onClick={nextCarousel}/>
</div>
        <div id='open-text'>
        
<h2>
    Conversation today may lead to opportunities tomorrow.
</h2>
<p>Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career. </p>
</div>
<div id="open-img">
    <img src="https://media.istockphoto.com/id/2191299471/photo/confident-latin-american-businesswoman-financial-accountant-using-calculator-and-pen-at.jpg?s=612x612&w=0&k=20&c=nXbF9quNntHXe2sPQschiduwz0JBFBA68MDTjQwXq8U=" alt="" />
</div>
</>
    }

    else if(index === 2){
        carousel = <>
        <div className="icon">
        <BiChevronLeft onClick={prevCarousel}/>

<BiChevronRight className='hide'/>
</div>
        <div id='open-text'>

<h2>
    Stay up to date on your Industry .
</h2>
<p>From live videos to stories to newsletters and more, LinkedIn is full of ways to stay upto date on latest discussions in your industry. </p>
</div>
<div id="open-img">
    <img src="https://media.istockphoto.com/id/2188611328/photo/two-colleagues-collaborating-in-a-modern-office-environment.
    jpg?s=612x612&w=0&k=20&c=KXPHnComKS2R4iPUA2WUvE7r4YLXWNc_qYLVq4gihek=" alt="two people getting updates online" />
</div>
        </>

    }
    else{
        return
    }
            const [currentIndex, setCurrentIndex] = useState(0);
          const mobileCarousel =[{image:"https://media.istockphoto.com/id/1299975932/photo/3d-illustration-of-smiling-cute-man-working-at-the-desk-in-modern-office-cartoon-happy.jpg?s=612x612&w=0&k=20&c=S7Nb-spsO_bLodTJJx7coekkVR040DEG5utWCkv6NY0=",
        text:"Find and land your next job"
        },
          {image:"https://media.istockphoto.com/id/1267083786/photo/woman-sitting-a-blue-couch-working-on-a-laptop-paper-craft.jpg?s=612x612&w=0&k=20&c=Co6qO0yfJyQrYhse02vzFJvKU0b-uKLWOrgMZf7vCAc="
          ,text:"Build your network on the go"
        },
          {image:"https://media.istockphoto.com/id/1399203332/vector/illustration-of-a-person-working-with-a-computer.jpg?s=612x612&w=0&k=20&c=rxjRkiPhexHp7Ufkm_ulTMyatdhR_I8jRRcKSQeCbBQ=",
        text:"Stay ahead with curated content for your career"
        }

        ]
            // Auto change image every 3 seconds
            useEffect(() => {
              const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                  prevIndex === mobileCarousel.length - 1 ? 0 : prevIndex + 1
                );
              }, 3000);
          
              return () => clearInterval(interval); // cleanup
            }, []);
    return (
        <>
        <Header />
        <section className='mobile-carousel'>
        <div className="carousel" style={{ textAlign: "center" }}>
      <img
        src={mobileCarousel[currentIndex].image}
        alt="carousel"
      />
      <b>{mobileCarousel[currentIndex].text}</b>
      <div style={{ marginTop: "10px" }}>
        {mobileCarousel.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              cursor: "pointer",
              fontSize: "20px",
              margin: "0 5px",
              color: currentIndex === index ? "black" : "lightgray",
            }}
          >
            ●
          </span>
        ))}
      </div>
    </div>
        </section>
        <section className='hero'>
            <div className='hero-text'>
                <h2>Welcome to your professional community</h2>
                <button className='google'>
                    <p>
                    <b>Continue as Halima</b> <br />
                    <span>dahunsiolajumoke18@gmail.com</span> 
                    </p>
                {/* <span className="google"> */}
                    <img src="../../src/assets/google logo.png" alt="google logo" />
                    {/* </span>  */}
                   
                </button>
                <button className='microsoft'>
                    <img src="../../src/assets/microsoft.png" alt="google logo" />
                    <b>Continue with microsoft</b>
                </button>
                <button onClick={()=> navigate("/signup")}>
                    <b>Sign in with email</b></button>
                <p className='term'>By clicking continue to join, you agreed to <a href=""><b>LinkedIn's User Agreement,
                    </b></a> <a href=""><b>Privacy policy</b></a> and
                <a href=""><b>Cookie policy</b></a>
                </p>
                <p className='term'>New to LinkedIn? <Link to={"/signup"}><b>join now</b></Link></p>
            </div>
            <div className="hero-img">
                <img src="../../src/assets/hero image.jpg" alt="man holding laptop avatar" />
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
       {carousel}
        </section>
        <section className="explore">
        
    <div className="open-img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdoPU-FuOG5yO0tIx8MvpCJtO31tQarjI6A&s" alt="open to work image" />
    <h2>Connect with people who can help</h2>
    <button>Find people you know</button>
    </div>
    <div className="open-img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRe2zE7vQxdvF4WtUkdCGROBWAZCC_yGaFpg&s" alt="open to work image" />
    <h2>Learn the skill you need to succeed</h2>
    <select name="" id="">Choose a topic
        <option value="Artificial Intelligence">Artificial Intelligence</option>
        <option value="Artificial Intelligence">Business Analysis and strategy</option>
        <option value="Artificial Intelligence">Business Software tools</option>
        <option value="Artificial Intelligence">Career development</option>
        <option value="Artificial Intelligence">Customer service </option>
        <option value="Artificial Intelligence">Diversity, Equity, and Inclusion</option>
        <option value="Artificial Intelligence">Artificial Intelligence</option>
        <option value="Artificial Intelligence">Artificial Intelligence</option>
        <option value="Artificial Intelligence">Artificial Intelligence</option>

    </select>
    </div>
        </section>
        <section className="find explore">
            <div className='find-text'>
                <h2>Who's LinkedIn for?</h2>
                <p>Anyone looking to navigate there professional life</p>
                <div className="find-btn">
                <a href="">
                    <span>Find a Co worker or classmate</span>
                    <BiChevronRight />
                </a>
                <a href="">
                    <span>Find a new job</span>
                    <BiChevronRight />
                </a><a href="">
                    <span>Find a Course training</span>
                    <BiChevronRight />
                </a>
            </div>
            </div>
            <div className="find-img">
                <img src="https://media.istockphoto.com/id/1969855088/photo/women-students-in-classroom-and-computer-for-education-e-learning-and-studying-or-writing.jpg?s=612x612&w=0&k=20&c=QY-FJjtQdR_nAJ9q2FnwnqnWccQY87hS2xwqcjkfsSE=" alt="Two students searching online" />
            </div>
        </section>
        <section className="join">
            <h2>Join your colleagues, classmates and friends on LinkedIn.</h2>
            <button>Get started</button>
        </section>
        {/* stopppppp */}
        <section className="footer">
            <div>
                <img src="../../src/assets/linkedin-image.png" alt="linkedin logo" />
            </div>
            <div>
                <b>General</b>
                <a href="#">Sign up</a>
                <a href="#">Help center</a>
                <a href="#">About</a>
                <a href="#">Press</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Developers</a>


            </div>
            <div>
                <b>Browse LinkedIn</b>
                <a href="#">Learning</a>
                <a href="#">Jobs</a>
                <a href="#">Games</a>
                <a href="#">Salary</a>
                <a href="#">Mobile</a>
                <a href="#">Services</a>
                <a href="#">Products</a>
                <a href="#">Top companies hub</a>


            </div><div>
                <b>Business solutions</b>
                <a href="#">Talent</a>
                <a href="#">Marketing</a>
                <a href="#">Sales</a>
                <a href="#">Learning</a>


            </div>
            <div>
                <b>Directories</b>
                <a href="#">Members</a>
                <a href="#">Job</a>
                <a href="#">Companies</a>
                <a href="#">Featured</a>
                <a href="#">Learning</a>
                <a href="#">Post</a>
                <a href="#">Articles</a>
                <a href="#">Schools</a>
                <a href="#">News</a>
                <a href="#">News letter</a>
                <a href="#">Services</a>
                <a href="#">Products</a>
                <a href="#">Advice</a>
                <a href="#">People search</a>
            </div>
        </section>
        </>
    )
}

export default Landing
