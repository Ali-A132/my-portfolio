import './App.css';
import { BsArrowDown } from 'react-icons/bs';
import flipbook from "./images/flipbook.gif"
import blankMac from "./images/macBlanco.jpg"
import Typical from 'react-typical'

function App() {
  return (
    <div className="container">

      <div class="navbar">

        <div class = "label1">Projects</div>
        <div class = "label">About Me</div>
        <div class = "label">Stats</div>
        <div class = "label">Contact</div>
        <div class = "label">Resume</div>

        <div class = "scroll_down"><BsArrowDown size = {70}/></div>
      </div>

      <div class = "title_section">
        <img src={flipbook} class="flip_book" />
        <div class = "web_title_box">
          <div class = "web_title">&lt;My Personal <b>Website/&gt;</b></div>
        </div>
        <img src={flipbook} class="flip_book" />
      </div>

      <div class = "greetings">
        <hr class = "line"></hr>
        
        <div class = "my_name">
          <Typical
            steps={['Hi, my name is', 1000, 'Hi, my name is Ali!', 500]}
            loop= {2}
            wrapper="p"
           />
          {/* Hi, my name is Ali! */}
          </div>
      </div>
      
      <div class = "mac_box">
        <img src={blankMac} class="mac_pic" />
        <div class = "mac_box_title">
          <div class = "mac_box_title_text">About Me</div>
        </div>
        <div class = "mac_box_text_box">
          <div class = "mac_box_text">Hello there! I am a second year student at Wilfrid Laurier University enrolled in Honours Computer Science. I am excited by software development and passionate about building projects in my spare time. I have experience in languages such as Python, Java, HTML/CSS, and JavaScript. Also, I have an understanding for a number of frameworks such as Django, Angular, and React. Feel free to reach out and message me!</div>
        </div>
      </div>

      <div class = "tech_and_frameworks_title">Technologies & Frameworks</div>

    </div>

    
  );
}

export default App;

{/* video for typing effect, loop off */}
        {/* https://www.youtube.com/watch?v=qEcXe51-ZTw */}