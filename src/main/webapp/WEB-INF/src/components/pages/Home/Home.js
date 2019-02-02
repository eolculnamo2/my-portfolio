import React from 'react';
import './Home.scss';
import Project from '../../library/Project/Project';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    title: "Title",
                    description: "adj alskdf;al jdf;lajsfd;lkajs;dlfkja;ldfkja;ljkd ;lakjs d;lkjas;ldfjk ;lkaj;lkd jf;asljkdf alkjdff",
                    github: "",
                    projectView: "",
                    stack: ""
                }
            ]
        }
    }
    render() {
        return(
            <div className="max-layout Home_wrap">
                <div className="Home__top-wrap Home__top-wrap--main">
                    <h1 className="Home__about-me">About Me</h1>
                    <div className="Home__top-wrap">
                        <img className="Home__skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png"/>
                        <img className="Home__skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"/>
                    </div>
                </div>
                <div className="Home_about-section-wrap">
                    <img className="Home_profile-img" src="https://avatars3.githubusercontent.com/u/27943776?v=4"/>
                    <p>I am a front end developer with a passion for JavaScript front end frameworks such as VueJS and React. I enjoy creating SPA applications most and enjoy providing the very best user experience possible. As a front end developer, it is important to me to have expert proficiency with HTML, CSS, and JavaScript.</p>
                    <p>My interests are not just on the front end. I enjoy back end development just as much and aspire to do full stack work. While I enjoy MERN stack, this portfolio site was actually built with a Java back end and uses Nashorn for server side rendering.</p>
                    <p>I believe that scalability and extendability is where code becomes an art. When another developer comes to an application that I've built, I always hope they find my code neatly abstracted and easy to edit.</p>
                    <p>Keeping my skills sharp is a priority for me. I spend two to three hours per night practicing in one form or another. While I lack years in terms of professional experience, I consistently work toward developing at a senior developer level.</p>
                    <p>The most fun part of my job is being part of a team. Nothing beats the chance to be on a team where everyone has respectable strengths and original ideas. I do my very best to learn what I am able from my teammates and am eager to share things I've picked up that I believe are useful.</p>                
                </div>
                <div className="Home__skill-block">
                    <h3 className="Home__h3-title">Core Skills</h3>
                    <ul>
                        <li>React</li>
                        <li>Vue</li>
                        <li>CSS/SCSS</li>
                        <li>HTML</li>
                        <li>Webpack & Gulp</li>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>Java</li>
                        <li>SpringMVC</li>
                        <li>Hibernate</li>
                    </ul>
                </div>
                <h1 className="Home__articles-title">Articles</h1>
                <div className="Home__articles-wrap">
                    <h3>Getting Started with VueJS</h3>
                    <p>Developers love VueJS. Click here to read how simple it is to get started and find out why this framework is so hyped.</p>
                    <h3>Building Scalable Projects with Front End JavaScript Frameworks</h3>
                    <p>Click here for tips on making your SPA application scalable in order to reap the benefits of consistency and ease of management.</p>
                </div>
                <h1 className="Home__articles-title">Portfolio</h1>
                <div className="Home__projects-wrap">
                    {this.state.projects.map((x,i) => <Project info={x} key={x.title+i}/> )}
                </div>
            </div>
        )
    }
}

export default Home;