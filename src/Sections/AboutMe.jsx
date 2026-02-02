import Box from "../Components/Box.jsx";

function AboutMe() {  
    return (
        <div className="about-me">
            <p>I'm a Software engineering student at Bournemouth University currently maintaining an average of 90% grades during my second year of study. </p>
            <p>I have experience in Python, JavaScript, React, Express and HTML/CSS. I'm passionate about coding and I'm always looking to expand my skill set.</p>
            <img src="" alt="Dom Dawson"/>
            <p></p>
            <button>Download CV</button>
                <div>
                <h3>Skills:</h3>
                <Box title="Programming Languages" content="Python, JavaScript, Java, C++"/>
                <Box title="Web Development" content="React, Express, HTML, CSS"/>
                <Box title="Databases" content="MySQL, MongoDB"/>
                <Box title="Tools" content="Git, Docker, VS Code"/>
                <h3>Academic Achievements:</h3>
                <Box title="First Year" content="Achieved an average of 71% across all modules"/>
                <Box title="Computing in Business" content="Came 3rd place in BU annual Computing in Business competition"/>
                <Box title="Second Year" content="Maintaining an average of 87% across all modules so far"/>
                </div>
        </div>
    )
}

export default AboutMe