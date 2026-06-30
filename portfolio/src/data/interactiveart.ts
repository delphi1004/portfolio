import type { WorkDescription } from './types'

import aqua01 from '../resources/small/aqua_01.png'
import aqua02 from '../resources/small/aqua_02.png'
import aqua03 from '../resources/small/aqua_03.JPG'
import aqua04 from '../resources/small/aqua_04.JPG'
import aqua05 from '../resources/small/aqua_05.JPG'
import aqua06 from '../resources/small/aqua_06.JPG'
import aqua07 from '../resources/small/aqua_07.JPG'
import game01 from '../resources/small/game_controller_01.JPG'
import game02 from '../resources/small/game_controller_02.JPG'
import game03 from '../resources/small/game_controller_03.JPG'

const interactiveArt: WorkDescription = {
  category: {
    name: '[ interactive project ]',
    description: 'It is always a pleasure for me to create an interactive project!',
  },
  project: [
    {
      title: "[ AQUARIUM PROJECT FOR HELSINKI CHILDREN'S HOSPITAL ]",
      containerColumn: '60% 30.5% 10%',
      maxResourceWidth: '30%',
      tools: 'Tool: Unity3D, Fusion 360, Teensy',
      main_image: { movie: 'FRKkWGA_G0s', height: '83%', caption: null },
      description:
        "I participated in a student volunteer project for the Helsinki Children's Hospital, working with a team of four to create an interactive art installation in the hospital lobby. The installation allowed kids to paint their favourite colours on a fish outline on paper, which was then scanned using a machine I developed. When the paper was placed in the scanner and a button was pressed, the painted fish was transformed into a digital fish in a virtual aquarium. Collaborating with talented individuals on this project was a truly impactful experience, as it brought joy and excitement to the children.",
      resources: [
        { image: aqua01, text: null },
        { image: aqua02, text: null },
        { image: aqua03, text: null },
        { image: aqua07, text: null },
        { image: aqua05, text: null },
        { image: aqua06, text: null },
        { image: aqua04, text: null },
        { movie: 'KFxfdGawWyI', height: '83%', caption: null },
      ],
    },
    {
      title: '[ THE MOST UNCOMFORTABLE GAME CONTROLLER ]',
      containerColumn: '60% 39%',
      maxResourceWidth: '30%',
      tools: 'Tool: Arduino, Laser cutter, Rotary sensor',
      main_image: {
        image: game01,
        caption: 'Two people should play the game together efficiently',
      },
      description:
        'The project, titled "Game Together!", explores the world of computer gaming and the various types of game controllers available. While standard controllers are designed for individual use, what happens when they become cumbersome or when two players must work together to play a game? This project aimed to answer these questions by designing a unique game controller consisting of a box with buttons and wheels. Each controller controls only one axis, allowing players to work together to move their character and reach the game\'s objective. This new design offers a fresh and unique gaming experience that diverges from the traditional game controller.',
      resources: [
        { image: game02, text: 'Rotary encoder to detect the steps of the rotation' },
        { image: game03, text: 'Laser cutting' },
      ],
    },
    {
      title: '[ PROJECTION MAPPING ]',
      containerColumn: '65% 35%',
      maxResourceWidth: '55%',
      tools: 'Tool: Processing, OpenCV, Kinect sensor, Mini projector',
      main_image: { movie: 'yYf2Ssi9EQA', caption: null, height: '200%' },
      description:
        "I developed an innovative projection mapping system that allows for interactive control of lights. By utilizing a combination of a projector and a Kinect sensor, the system detects the 3D position of a person's palm and directs the lights to converge on it, as if they were being drawn towards the centre of the universe. This unique technology offers a new and captivating experience for users.",
    },
  ],
}

export default interactiveArt
