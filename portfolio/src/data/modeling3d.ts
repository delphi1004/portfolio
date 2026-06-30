import type { WorkDescription } from './types'

import m01 from '../resources/small/3dmodeling_01.png'
import m02 from '../resources/small/3dmodeling_02.png'
import m03 from '../resources/small/3dmodeling_03.png'
import m04 from '../resources/small/3dmodeling_04.png'
import m05 from '../resources/small/3dmodeling_05.png'
import m06 from '../resources/small/3dmodeling_06.png'
import m07 from '../resources/small/3dmodeling_07.png'
import m08 from '../resources/small/3dmodeling_08.png'
import m09 from '../resources/small/3dmodeling_09.png'
import m10 from '../resources/small/3dmodeling_10.png'
import m11 from '../resources/small/3dmodeling_11.png'
import m12 from '../resources/small/3dmodeling_12.png'

const modeling3d: WorkDescription = {
  category: {
    name: '[ 3d modeling ]',
    description: 'Fusion 360 is my favorite 3D modeling tool',
  },
  project: [
    {
      title: '[ 3D MODELING EXERCISE ]',
      description: null,
      containerColumn: '0',
      maxResourceWidth: '30%',
      tools: 'Tool: Fusion 360',
      main_image: null,
      resources: [
        { image: m01, text: null },
        { image: m02, text: null },
        { image: m03, text: null },
        { image: m12, text: null },
        { image: m05, text: null },
        { image: m06, text: null },
        { image: m07, text: null },
        { image: m08, text: null },
        { image: m09, text: null },
        { image: m10, text: null },
        { image: m11, text: null },
        { image: m04, text: null },
      ],
    },
  ],
}

export default modeling3d
