import type { WorkDescription } from './types'

import nuanuaScreenshot from '../resources/small/nuanua_02.png'
import ruukki3dPreview from '../resources/ruukki_01.png'
import ruukkiProfileEditor from '../resources/ruukki_02.png'
import ruukkiOrderView from '../resources/ruukki_03.png'


const softwareDevelopment: WorkDescription = {
  category: {
    name: '[ software development ]',
    description:
      'I design and build digital systems where interface, structure, and interaction work as one continuous experience.',
  },
  project: [
    {
      title: '[ WEB INTERFACE SYSTEMS ]',
      containerColumn: '100%',
      tools:
        'React · Next.js · TypeScript · Sass · Storybook · Testing · CMS',
      description:
        'I develop content-driven web platforms and interactive interfaces, combining frontend architecture with careful visual systems and maintainable implementation.',
      resources: [
        {
          url: 'https://www.workinfinland.com/en/',
          urlLabel: 'workinfinland.com',
          text: 'React · Next.js · TypeScript · Sass · Storybook · Jest · Cypress · Magnolia',
        },
        {
          url: 'https://tykkimakiresort.fi/en/',
          urlLabel: 'tykkimakiresort.fi',
          text: 'React · Sanity.io · TypeScript · styled-components · Storybook · Jest · Cypress · WordPress',
        },
        {
          url: 'https://www.whyenergyefficiency.com/',
          urlLabel: 'whyenergyefficiency.com',
          text: 'React · TypeScript · Tailwind · Storybook · Jest · Sanity.io',
        },
        {
          url: 'https://www.s-kanava.fi/',
          urlLabel: 's-kanava.fi',
          text: 'React · Sanity.io · TypeScript · styled-components · Storybook · Jest · Cypress · WordPress',
        },
        {
          url: 'https://www.fonum.fi/',
          urlLabel: 'fonum.fi',
          text: 'React · TypeScript · Sass · Contentful',
        },
        {
          url: 'https://www.metsanarvo.fi/',
          urlLabel: 'metsanarvo.fi',
          text: 'React · Next.js · TypeScript · Sass · Sanity.io',
        },
      ],
    },
    {
      title: '[ VR APPLICATION ]',
      containerColumn: '100%',
      tools:
        'VR · Rehabilitation · Interaction Design · Gamified Training',
      description:
        'Nuanua is a VR therapy game for Kostamokoti rehabilitation center, designed to help residents practice everyday routines, communication, emotional regulation, and decision-making in a safe simulated environment.',
      main_image: {
        image: nuanuaScreenshot,
        caption: 'Nuanua VR Therapy interface and island environment',
      },
      resources: [
        {
          url: 'https://www.adventureclub.io/work/nuanua-vr-therapy',
          urlLabel: 'Nuanua VR Therapy',
          text: 'Kostamokoti · VR Therapy · Everyday Skills · Rehabilitation Support',
        },
      ],
    },
    {
      title: '[ CUSTOM ORDERING TOOL ]',
      containerColumn: '100%',
      tools:
        'CAD-like Editor · 3D Rendering · Product Configuration · Digital Ordering · TypeScript · Three.js · HTML Canvas',
      description:
        'I built a digital ordering application for Ruukki, a Finnish company specializing in roofing and steel-based building products. The tool lets customers create custom flashing profiles by drawing their own shape or loading a model saved on the server, then adjusting lengths, angles, materials, colors, and which sides should be coated. The customized profile can be previewed immediately as a 3D rendering, turning a manual order process into a precise digital workflow that Ruukki can manufacture and deliver.',
      main_image: {
        image: ruukki3dPreview,
        caption: 'CAD-like profile editor for adjusting lengths, angles, and strip width',
      },
      resources: [
        {
          image: ruukkiProfileEditor,
          text: '3D preview of the configured flashing profile before ordering',
        },
        {
          image: ruukkiOrderView,
          text: 'Digital order workflow for the configured flashing product',
        },
      ],
    },
  ],
}

export default softwareDevelopment
