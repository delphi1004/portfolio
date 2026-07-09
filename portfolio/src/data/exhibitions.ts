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
    description: 'Exhibitions, installations, and public presentations where computational systems meet physical space.',
  },
  project: [
    {
      title: '[ WHEN LIGHT ECHOES ]',
      containerColumn: '49% 40%',
      maxResourceWidth: '30%',
      tools: 'Group Exhibition · 26 May - 31 May 2019 · aSSIST, Seoul · Processing / Kinect / Pure Data',
      main_image: { movie: '2yZoM1qjo9o', height: '83%', caption: null },
      description:
        "An interactive installation where visitors' hand movements are captured by Kinect and reflected back as audiovisual echoes. I led the concept, prototyping, and final Processing system, shaping the work as a public encounter between gesture, light, and sound.",
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
      tools: 'Solo Exhibition · 23 Feb - 03 Mar 2019 · Väre Gallery V1, Aalto University · openFrameworks / Arduino / 3D Printing',
      main_image: { movie: '3yvqrAyYy-4', height: '83%', caption: null },
      description:
        'A solo exhibition exploring how sound can become visible, tactile, and spatial. The work transforms auditory information into images, objects, and interactive systems, asking how perception changes when sound moves into another medium.',
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
