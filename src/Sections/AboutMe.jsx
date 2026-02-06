import Box from "../Components/Box.jsx";
import Pic from "../Assets/Profile picture.png";
import "./Sections.css";


function AboutMe() {  
    return (
        <div className="about-me">
            <img className="profile-pic" src={Pic} alt="Dom Dawson"/>
            <div className="about-text">
            <p>I'm a Second year Software engineering student at Bournemouth University with a focus on full stack web development. </p>
            <p>I've always been driven by creating practical solutions to real world problems and have worked across every stage of web development. From designing UI wireframes, building frontend components and developing backend functionality. To testing, QA and launch. I pride myself in producing high-quality work for every project I undertake. </p>
            <p>Outside of coding I'm constantly working on DIY tech projects, whether it be tinkering with raspberry pis to create a home assistant, dabbling in electronics or 3D printing custom housings. I'm always eager to learn new skills to keep myself busy.</p>
            <p>Currently looking for an internship for internships so I can get some real world experience and to learn from experienced software engineers as I develop my skill set </p >
            </div>
                <div className="skills">    
                <h3>👨‍💻 Skills:</h3>
                <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Express</li>   
                <li>HTML & CSS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>Figma</li>
                </ul>
                </div>
                <div className="achievements">
                <h3>🎓 Academic Achievements:</h3>
                <ul> 
                <li><Box title="First Year 📚" content="Achieved an average of 72% across all modules"/></li>
                <li><Box title="Computing in Business 🥉" content="Came 3rd place in BU annual Computing in Business competition"/></li>
                <li><Box title="Second Year 📈" content="Maintaining an average of 87% across all modules so far"/></li>
                </ul>
                </div>
        </div>
    )
}

export default AboutMe