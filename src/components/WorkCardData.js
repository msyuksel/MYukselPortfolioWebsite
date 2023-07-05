import hBM from "../assets/workCardAssets/hbt.jpg"
import aAU from "../assets/workCardAssets/argonAssault.jpg"
import tM from "../assets/workCardAssets/terminalHacker.jpg"
import pB from "../assets/workCardAssets/projectBoost.jpg"

const ProjectCardData = [
    {
        imgsrc: hBM,
        title:"Automated Testing for humanbenchmark.com",
        text: "We've created an automated testing framework for fun using Java, Selenium, TestNg, and Cucumber BDD",
        view: "https://github.com/msyuksel/HumanBenchmarkTesting",
        source:"https://github.com/msyuksel/HumanBenchmarkTesting",
    },
    {
        imgsrc: aAU,
        title:"Argon Assault Unity 3D Game",
        text: "A 3D on rails space shooter inspired by games like Star Fox. Assume control of a space ship fighter in the Galactic Freedom Figher Force. Take down enemies of freedom, and liberate your base from the oppressive forces of the Galactic Empire",
        view: "https://msenih.itch.io/argon-assault-udemy-project",
        source:"https://github.com/msyuksel/4_Argon_Assault",
    },
    {
        imgsrc: tM,
        title:"Terminal Hacker",
        text: "My first ever Unity 3D game made with C#. It's a simple text base game where you try to guess the word given a scrambled set of letters, kind of like Jumble or Word Scramble",
        view: "https://sharemygame.com/@msenih/terminal-hacker-udemy-project",
        source:"https://github.com/msyuksel?tab=repositories",
    },
    {
        imgsrc: pB,
        title:"Project Boost",
        text: "A side scrolling rocket ship obstacle course game. It's currently broken I assume due to webGL changes but it used to work I promise! The goal was to land on the green landing pad without touchin any of the terrain, exept for the landing pad and launch pad",
        view: "https://sharemygame.com/@msenih/project-boost-udemy",
        source:"https://github.com/msyuksel/3_Project_Boost",
    },
    
]

export default ProjectCardData
