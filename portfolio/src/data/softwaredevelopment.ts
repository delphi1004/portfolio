import type { WorkDescription } from './types'

import sw01 from '../resources/softwaredevelopment_01.png'
import sw03 from '../resources/softwaredevelopment_03.png'
import sw04 from '../resources/softwaredevelopment_04.png'
import sw05 from '../resources/softwaredevelopment_05.png'
import sw06 from '../resources/softwaredevelopment_06.png'
import sw07 from '../resources/softwaredevelopment_07.png'
import ns05 from '../resources/naturalsound_05.PNG'

const softwareDevelopment: WorkDescription = {
  category: {
    name: '[ software development ]',
    description: 'Software architecture design is similar to designing a city',
  },
  project: [
    {
      title: '[ AUTOMATED EQUIPMENT S/W DESIGN ]',
      containerColumn: '49% 40%',
      maxResourceWidth: '48%',
      tools: 'Tool: UML, C++, C#',
      main_image: {
        image: sw01,
        caption: 'Software architecture design for automated AFM',
      },
      description:
        'The measurement is needed for the production of semiconductor after Etch process. The old method damages the surface of Wafer cause of using profiler, so we could not measure the part of transistor for the real circuit. This is the automated S/W project which used for semiconductor 300mm & LCD FAB. For the perfect automatic system, communicate with the host of customer and SECS (SEMI Equipment Communications Standard) Message formulation.',
      resources: [
        { image: sw05, text: null },
        { image: sw03, text: 'Sequence diagram of loading wafer' },
        { image: sw04, text: null },
        {
          text: "Most of equipment companies develop their s/w depend on what kind of 3rd party dll or library use for control devices. Imagine if you need a change system HW components in the field according to customer specs. In this case, the entire low-level device control code must be re-written. To avoid this fundamental problem, I designed a multi-action 'virtual device' concept treating component control at a high level of abstraction.",
        },
        { image: sw06, text: null },
        { image: sw07, text: null },
      ],
    },
    {
      title: '[ NATURAL SOUND APP ]',
      containerColumn: '49% 20%',
      maxResourceWidth: '90%',
      tools: 'Tool: Xcode, Objective-C',
      main_image: null,
      description:
        'Become part of nature while listening to nature in your busy everyday life anywhere and at any time. 100% purely a natural sound. There is absolutely no advertisement. The developer personally went to the field to record each sound with care.',
      resources: [{ image: ns05, text: 'Simple and easy to use' }],
    },
  ],
}

export default softwareDevelopment
