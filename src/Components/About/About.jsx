import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aperiam quaerat voluptatum cupiditate, dolor officia ipsam excepturi quo odit, neque aut quis tenetur minima! Eveniet vitae quasi ea illo harum?
            tur odit laudantium temporibus nihil doloribus est explicabo eaque consectetur perspiciatis ducimus deleniti vitae, maiores totam repellat quia.</p>             <p>voluptatum cupiditate, dolor officia ipsam excepturi quo odit, neque aut quis tenetur minima! Eveniet vitae quasi ea illo harum?
            di voluptatum. Eius, corporis! Esse, pariatur odit laudantium temporibus nihil doloribus est explicabo eaque consectetur perspiciatis ducimus deleniti vitae, maiores totam repellat quia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aperiam quaerat voluptatum cupiditate, dolor officia ipsam excepturi quo odit, neque aut quis tenetur minima! Eveniet vitae quasi ea illo harum?
            rspiciatis ducimus deleniti vitae, maiores totam repellat quia.</p>
        </div>
    </div>
  )
}

export default About