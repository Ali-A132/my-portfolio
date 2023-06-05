import './App.css';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import flipbook from "./images/flipbook.gif";
import angularLogo from "./images/angular_logo.png";
import cLogo from "./images/c_logo.png";
import cssLogo from "./images/css_logo.png";
import djangoLogo from "./images/django_logo.png";
import firebaseLogo from "./images/firebase_logo.png";
import gitLogo from "./images/git_logo.png";
import htmlLogo from "./images/html_logo.png";
import javaLogo from "./images/java_logo.png";
import jsLogo from "./images/js_logo.png";
import macBlank from "./images/macBlanco.jpg"
import mongodbLogo from "./images/mongodb_logo.png";
import nodejsLogo from "./images/nodejs_logo.png";
import pythonLogo from "./images/python_logo.png";
import reactLogo from "./images/react_logo.png";
import sqlLogo from "./images/sql_logo.png";
import vbaLogo from "./images/vba_logo.png";
import pokeplanner_picture from "./images/pokeplanner_picture.png";
import sentitweet_picture from "./images/sentitweet_picture.png";
import python_script_picture from "./images/python_script_pic.png";
import lauriercs_picture from "./images/lauriercs_pic.JPG";
import avatar_picture from "./images/avatar_pic.png";
import madhouse_picture from "./images/madhouse_blueprint.JPG";
import github_logo from "./images/github_logo.png";
import instagram_logo from "./images/instagram_logo.png";
import linkedin_logo from "./images/linkedin_logo.png";
import resume_logo from "./images/resume_logo.png";
import Typical from 'react-typical'
import PDF from './images/AliAkbar-PortfolioSiteResume.pdf';
import { useRef } from 'react';
import { ScrollArea, Stack } from '@mantine/core';
import { Tooltip, Button, Group } from '@mantine/core';
import { Center, Badge, Container, Card, Image, Text, Title, Divider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function App() {
  return (
    
    <div className="container">
      
      <div class="navbar" id = "top">
      
        <a class = "label1" href ="#project_section">Projects</a>
        <a class = "label" href ="#mac_box">About</a>
        <a class = "label" href ="#mystat">Stats</a>
        <a class = "label" href ="#bot">Contact</a>
        <a class = "label" href = {PDF} target="blank" rel="next noreferrer">Resumé</a>

        <a class = "scroll_down" href ="#bot"><BsArrowDown size = {70}/></a>

        
      </div>

      <div class = "title_section">
        <img src={flipbook} class="flip_book" />
        <div class = "web_title_box">
          <div class = "web_title">&lt;My Personal</div>
          <div class = "web_title">Website/&gt;</div>
        </div>
        <img src={flipbook} class="flip_book2" />
      </div>

      <div class = "greetings">
        <hr class = "line"></hr>
        
        <div class = "my_name">
          <Typical
            steps={['Hi, my name is uhhhhhhh', 1000, 'Hi, my name is Ali!', 500]}
            loop= {1}
            wrapper="p"
           />
          {/* Hi, my name is Ali! */}
          </div>
      </div>
      
      <div class = "mac_box" id = "mac_box">
        <div class = "mac_box_title">
          <div class = "mac_box_title_text">About Me</div>
        </div>
        <div class = "mac_box_text_box">
          <div class = "mac_box_text">Hello there! I am a second year student at Wilfrid Laurier University enrolled in Honours Computer Science. I am excited by software development and passionate about building projects in my spare time. I have experience in languages such as Python, Java, HTML/CSS, and JavaScript. Also, I have an understanding for a number of frameworks such as Django, Angular, and React. Feel free to reach out and message me!</div>
        </div>
      </div>

      <div class = "tech_section">
        <div class = "tech_and_frameworks_title">Technologies & Frameworks</div>
        <Tooltip.Group>
          <Group position="center">

          <Tooltip label="Django">
            <img src={djangoLogo} class="tech_pic"/>
          </Tooltip>

          <Tooltip label="Angular">
            <img src={angularLogo} class="tech_pic" />
          </Tooltip>

          <Tooltip label="React.js">
            <img src={reactLogo} class="tech_pic_special" />
          </Tooltip>

          <div class = "tech_pic_row2"></div>   

          <Tooltip label="node.js">
            <img src={nodejsLogo} class="tech_pic_special2" />
          </Tooltip>

          <div class = "tech_pic_row2"></div>   

          <Tooltip label="Firebase">
            <img src={firebaseLogo} class="tech_pic_special2" />
          </Tooltip>

          <div class = "tech_pic_row2"></div>   

          <Tooltip label="Git">
            <img src={gitLogo} class="tech_pic_row" />
          </Tooltip>

          <Tooltip label="MongoDB">
            <img src={mongodbLogo} class="tech_pic_row" />
          </Tooltip>   

          </Group>
        </Tooltip.Group>
      </div>

      <div class = "prog_section">
        <div class = "prog_section_title">Programming Language</div>
        <Tooltip.Group>
          <Group position="center">

          <Tooltip label="Python">
            <img src={pythonLogo} class="tech_pic"/>
          </Tooltip>

          <div class = "tech_pic_row2"></div>  

          <Tooltip label="Java">
            <img src={javaLogo} class="tech_pic" />
          </Tooltip>

          <div class = "tech_pic_row2"></div>  

          <Tooltip label="C">
            <img src={cLogo} class="tech_pic_special" />
          </Tooltip>

          <div class = "tech_pic_row2"></div>   

          <Tooltip label="SQL">
            <img src={sqlLogo} class="tech_pic_special2" />
          </Tooltip>


          <Tooltip label="VBA">
            <img src={vbaLogo} class="tech_pic_special2" />
          </Tooltip>

          <div class = "tech_pic_row2"></div>   
          <div class = "tech_pic_row2"></div>   

          <Tooltip label="JavaScript">
            <img src={jsLogo} class="tech_pic_row" />
          </Tooltip>

          <div class = "tech_pic_row2"></div>   

          <Tooltip label="HTML">
            <img src={htmlLogo} class="tech_pic_row" />
          </Tooltip>   

          <Tooltip label="CSS">
            <img src={cssLogo} class="tech_pic_row" />
          </Tooltip>   

          </Group>
        </Tooltip.Group>
      </div>

      <div class="project_section" id= "project_section">
        <div class = "project_section_title">Projects!</div>
        <div class = "project_section_text">Some cool stuff I made, check it out!</div>
        <div class ="merry_go_round">
        <Carousel  
   
            max-height={700}
            min-height={700}
            slideSize="33.3333333333333%"
            slideGap="md"
            loop dragFree
            align="start"
          >
              {/* Project 1 */}
              <Carousel.Slide>
                  <Card shadow="sm" p="md" radius="lg" withBorder>
                        <Card.Section>
                            <Image 
                                  src={pokeplanner_picture}
                                  height={150}
                                  alt="Project 1"
                            />
                        </Card.Section>

                        <Group positon="apart" mt="md" mb="xs">
                            <Text weight={500}> The PokéPlanner </Text>
                            <Badge gradient={{ from: 'cyan', to: 'gold' }} variant="gradient" > Hackathon </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                        Won ”Most Innovative Hack” and placed first place in the GoldenHack Hackathon. Built a student budgeting app to help manage finances during the pandemic and spend money wisely. Developed with Django, JavaScript, SQL, and Python.
                        </Text>
                        <div className="spacer" style={{ width: "100%", height: "2em" }} />
                        <Center>
                            <Button component="a" href="https://github.com/Ali-A132/golden-hack-3.0" target="_blank" rel="noreferrer" variant="dark" color="aqua" radius="md">
                                  View Project Code
                            </Button>
                        </Center>
                  </Card>
              </Carousel.Slide>

              {/* Project 2 */}
              <Carousel.Slide>
                  <Card shadow="sm" p="md" radius="lg" withBorder>
                        <Card.Section>
                            <Image 
                            src={sentitweet_picture}
                            height={150}
                            alt="Project 2"
                            />
                        </Card.Section>

                        <Group positon="apart" mt="md" mb="xs">
                            <Text weight={500}> SentiTweet </Text>
                            <Badge variant="gradient" gradient={{ from: 'indigo', to: 'orange', deg: 35 }}> Sentiment Analysis </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                        Built a Twitter sentiment analyzer that looks at a tweets and scores it based on emotional language found in text. Implemented the Twitter API and made with Python, Django, JavaScript, SQL, postsgreSQL, Figma, HTML/CSS.
                        </Text>
                        <div className="spacer" style={{ width: "100%", height: "2em" }} />
                        <Center>
                            <Button component="a" href="https://github.com/Ali-A132/SentiTweet" target="_blank" rel="noreferrer" variant="dark" color="btn-color.6" radius="md">
                                  View Project Code
                            </Button>
                        </Center>
                  </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                  <Card shadow="sm" p="md" radius="lg" withBorder>
                        <Card.Section>
                            <Image 
                            src={python_script_picture}
                            height={150}
                            alt="Project 3"
                            />
                        </Card.Section>

                        <Group positon="apart" mt="md" mb="xs">
                            <Text weight={500}> Coding Timeline Generator  </Text>
                            <Badge variant="gradient" gradient={{ from: 'cyan', to: 'grey', deg: 105 }}> Python Script </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                        These scripts download all commits made to a repo, look for specific codes within them, rename the different versions and save them to desired directories, and take screenshots of the different versions. Made with Python.
                        </Text>
                        <div className="spacer" style={{ width: "100%", height: "2em" }} />
                        <Center>
                            <Button component="a" href="https://github.com/Ali-A132/FinalShowcaseGenerator" target="_blank" rel="noreferrer" variant="dark" color="btn-color.6" radius="md">
                                  View Project Code
                            </Button>
                        </Center>
                  </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                  <Card shadow="sm" p="md" radius="lg" withBorder>
                        <Card.Section>
                            <Image 
                            src={madhouse_picture}
                            height={160}
                            alt="Project 3"
                            />
                        </Card.Section>

                        <Group positon="apart" mt="md" mb="xs">
                            <Text weight={500}> MAD-HOUSE </Text>
                            <Badge variant="gradient" gradient={{ from: 'cyan', to: 'lime' }}> Database Archive </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                        A website made to compile interviews, concert footage, and unreleased music by my favorite artists. Made with React, Firebase, JavaScript, HTML/CSS, YT Rapid API.
                        </Text>
                        <div className="spacer" style={{ width: "100%", height: "4.2em" }} />
                        <Center>
                            <Button component="a" href="https://github.com/Ali-A132/MAD-HOUSE" target="_blank" rel="noreferrer" variant="dark" color="btn-color.6" radius="md">
                                  View Project Code
                            </Button>
                        </Center>
                  </Card>
              </Carousel.Slide>

              {/* Project 3 */}

              <Carousel.Slide>
                  <Card shadow="sm" p="md" radius="lg" withBorder>
                        <Card.Section>
                            <Image 
                            src={lauriercs_picture}
                            height={150}
                            alt="Project 3"
                            />
                        </Card.Section>

                        <Group positon="apart" mt="md" mb="xs">
                            <Text weight={500}> Laurier CS Website </Text>
                            <Badge variant="gradient" gradient={{ from: 'orange', to: 'yellow' }}> Web Development </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                        Official website for the Laurier Computing Society - built with love in React! Details the many initiatives that are brought forward from the help of LCS such as hosting Hackathons, the POD's Program and the University of Waterloo collaboration.
                        </Text>
                        <div className="spacer" style={{ width: "100%", height: "2em" }} />
                        <Center>
                            <Button component="a" href="https://github.com/LaurierCS/Website" target="_blank" rel="noreferrer" variant="dark" color="btn-color.6" radius="md">
                                  View Project Code
                            </Button>
                        </Center>
                  </Card>
              </Carousel.Slide>

          
              
        </Carousel>
        </div>

        <div class = "mystat" id = "mystat"></div>
      <div class = "mac_box">
        <div class = "mac_box_title">
          <div class = "mac_box_title_text2" id = "mac_box_title_text2">My Stats</div>
        </div>

        <div class = "avatar">
          <img src={avatar_picture} />
        </div>

        <div class = "hp">HP: 19 🔋</div>
        <div class = "hp">Typing Speed: 62wpm ⚡</div>
        <div class = "hp">Eyesight: 20/20 👀</div>
        <div class = "hp">Spec. Atk: Recycling ♻️</div>
        <div class = "hp2">Hobby: Piano 🎹</div>
        <div class = "me_tag">⬆ Me</div>

      </div>

      <div class= "copyright" id = "bot">© 2023 Ali Akbar. All rights reserved.</div>

      <div class = "navbar2">
        <a class = "icon_nav1" href = {PDF} target="blank" rel="next noreferrer"><img src={resume_logo} /></a>
        <a class = "icon_nav" href="https://github.com/Ali-A132"><img src={github_logo} /></a>
        <a class = "icon_nav" href="https://www.instagram.com/_not_ali/"><img src={instagram_logo}/></a>
        <a class = "icon_nav2" href="https://www.linkedin.com/in/ali-akbar132/"><img src={linkedin_logo}/></a>
        <a class = "scroll_up" href ="#top"><BsArrowUp size = {70}/></a>
      </div>

      </div>
      

    </div>

    
  );
}

export default App;

{/* video for typing effect, loop off */}
        {/* https://www.youtube.com/watch?v=qEcXe51-ZTw */}