import type { WorkDescription } from './types'

import ex01 from '../resources/small/Korea_Exhibition_01.png'
import ex02 from '../resources/small/Korea_Exhibition_02.png'
import ex03 from '../resources/small/Korea_Exhibition_03.png'
import ex04 from '../resources/small/Korea_Exhibition_04.JPG'
import ex05 from '../resources/small/Korea_Exhibition_05.JPG'
import ex10 from '../resources/small/Korea_Exhibition_10.JPG'
import ss01 from '../resources/small/SeeingSound_01.JPG'
import ss02 from '../resources/small/SeeingSound_02.JPG'
import ss03 from '../resources/small/SeeingSound_03.JPG'
import ss04 from '../resources/small/SeeingSound_04.JPG'
import ss09 from '../resources/small/SeeingSound_09.JPG'
import ss10 from '../resources/small/SeeingSound_10.JPG'
import ss11 from '../resources/small/SeeingSound_11.png'
import ss12 from '../resources/small/SeeingSound_12.JPG'

const exhibitions: WorkDescription = {
  category: {
    name: '[ exhibition ]',
    description: 'It is always a pleasure of having an exhibition in a public place.',
  },
  project: [
    {
      title: '[ WHEN LIGHT ECHOES ]',
      containerColumn: '49% 40%',
      maxResourceWidth: '30%',
      tools: 'Group exhibition  26 May – 31 May 2019  aSSIST, Seoul Korea  —  Tool: Processing, Kinect sensor, Pure data',
      main_image: { movie: '2yZoM1qjo9o', height: '83%', caption: null },
      description:
        "In this interactive installation, the viewer experiences the fascinating phenomenon of light echoes. By moving their hand slowly within the frame, they can observe how their hand movements are reflected back in an audiovisual form. The project combines the use of a Kinect sensor, Processing, and Pure Data software tools to detect and reflect the audience's hand motion. As a team leader, I was responsible for suggesting ideas, conceptualizing the design, implementing a prototype, and overseeing the development of the final system using Processing.",
      resources: [
        { image: ex03, text: null },
        { image: ex02, text: null },
        { image: ex01, text: null },
        { image: ex04, text: null },
        { image: ex05, text: null },
        { image: ex10, text: null },
        { movie: '_oY2OiHYTao', height: '100%' },
        { movie: 'I2fUAAkIAfQ', height: '100%' },
      ],
    },
    {
      title: '[ SEEING SOUND, LISTENING TO IMAGE ]',
      containerColumn: '49% 40%',
      maxResourceWidth: '30%',
      tools: 'Solo exhibition  23 Feb – 03 Mar 2019  Väre gallery V1, Aalto University Finland  —  Tool: openFrameworks C++, Arduino, 3D Printing',
      main_image: { movie: '3yvqrAyYy-4', height: '83%', caption: null },
      description:
        'Out of all the sensory stimuli that we process, sound is one of the most recognizable. However, as our ears, not our eyes, are the sensory organ responsible for perceiving and understanding this auditory information. Through my exhibition, I focus on making this unseeable data more tangible, exploring how our brain could potentially interpret sound differently if it was transformed into another medium.',
      resources: [
        { image: ss12, text: null },
        { image: ss01, text: null },
        { image: ss10, text: null },
        { image: ss03, text: null },
        { image: ss04, text: null },
        { image: ss09, text: null },
        { image: ss02, text: null },
        { image: ss11, text: null },
      ],
    },
  ],
}

export default exhibitions
