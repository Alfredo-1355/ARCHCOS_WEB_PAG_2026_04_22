import { ServicePageData } from '../types';

export const SERVICES_DATA: Record<string, ServicePageData> = {
  residential: {
    id: 'residential',
    heroImage: '/projects/86-kings-lake-residence/cover.png',
    title: 'Bespoke Residential Architecture',
    whatSection: {
      title: 'Redefining Home',
      description: 'We design custom luxury homes, single-family estates, modern sustainable residences, and significant home additions. At Archcos, we go beyond standard floor plans to craft homes that are unique reflections of your family’s lifestyle, dreams, and environment. We are dedicated to creating spaces that are both functional and breathtakingly beautiful.',
      hook: 'Leverage our family-owned dedication to provide unmatched personalization. Our team is focused on delivering a service that ensures your dreams are captured from the ground up.'
    },
    howSection: {
      title: 'The Collaboration',
      steps: [
        { title: 'Intake & Analysis', description: 'Client intake and complete site analysis.' },
        { title: 'Conceptual Sketches', description: 'Translating concepts through rapid freehand ideation.' },
        { title: 'Detailed Blueprints', description: 'Site Plans, Floor Plans, and Architectural Elevations.' },
        { title: '3D Visualizations', description: 'Immersive walkthroughs and volumetrics.' },
        { title: 'Permitting & Approvals', description: 'Ensuring structural and municipal compliance.' }
      ]
    },
    gallery: [
      '/projects/velasquez-residence/cover.jpg',
      '/projects/southline-residence/cover.jpg',
      '/projects/london/R-01.png',
      '/projects/paris/R-01.png',
      '/projects/melbourne/EXT-01.jpg',
      '/projects/amsterdam/EXT-01.jpg'
    ]
  },
  commercial: {
    id: 'commercial',
    heroImage: '/projects/venue-creekside-arts/EXT-14.png',
    title: 'Strategic Commercial Architecture',
    whatSection: {
      title: 'Business-Focused Design',
      description: 'We design functional and brand-forward commercial spaces, including office buildings, retail centers, restaurants, hotels, corporate headquarters, and medical facilities. We understand that commercial design must blend operational efficiency with a powerful brand statement.',
      hook: 'Emphasize our multidisciplinary team\'s ability to manage complex large-scale projects, meet tight deadlines, and enhance brand identity through architecture. Show our capability to deliver on corporate visions.'
    },
    howSection: {
      title: 'Vision to Value',
      steps: [
        { title: 'Business Analysis', description: 'Brief integration and commercial feasibility studies.' },
        { title: 'Multi-phase Planning', description: 'Strategic zoning and operational flow.' },
        { title: 'Structural & Electrical', description: 'Detailed heavy-duty engineering plans.' },
        { title: 'Zoning & Permitting', description: 'Navigating complex municipal regulations.' },
        { title: 'Construction Support', description: 'On-site synergy for smooth project flow.' }
      ]
    },
    gallery: [
      '/projects/del-pueblo-funeral-home/EXT-01.png',
      '/projects/grand-lakes-padel/EXT-01.jpg',
      '/projects/empire-cookies/R-19.png',
      '/projects/road-west-racket-social-club/R-01.png',
      '/projects/pasteko/PORTADA DE PASTEKO 02.png',
      '/projects/elmfield-drive-studio/R-01.png'
    ]
  },
  interior: {
    id: 'interior',
    heroImage: '/projects/southline-residence/R-01.jpg',
    title: 'Curation and Space Artistry',
    whatSection: {
      title: 'Designing From Within',
      description: 'We craft complete interior spatial solutions, including space planning for all rooms, custom furniture and lighting design, finish and material curation, and bespoke cabinetry.',
      hook: 'Reiterate our belief in "comfortable homes" by focusing on functional beauty and client lifestyle. Detail our team’s deep expertise in translating client visions into tangible, tactile designs.'
    },
    howSection: {
      title: 'The Art of Detail',
      steps: [
        { title: 'Interior Sketches', description: 'Initial spatial flow concepts.' },
        { title: 'Space Planning', description: 'Detailed diagrams and ergonomic layouts.' },
        { title: 'Material Boards', description: 'Comprehensive textural and finish curation.' },
        { title: 'Lighting Development', description: 'Illumination plans and fixture selection.' },
        { title: 'FF&E', description: 'Furniture, Fixtures, and Equipment sourcing.' }
      ]
    },
    gallery: [
      '/projects/southline-residence/R-01.jpg',
      '/projects/pasteko/PORTADA DE PASTEKO 02.png',
      '/projects/velasquez-residence/VEL-INT-02.jpeg',
      '/projects/southline-residence/R-05.png',
      '/projects/southline-residence/R-04.png',
      '/projects/velasquez-residence/VEL-INT-01.jpeg'
    ]
  },
  landscape: {
    id: 'landscape',
    heroImage: '/projects/venue-creekside-arts/LS_03.png',
    title: 'Experiential Outdoor Environments',
    whatSection: {
      title: 'Creating Seamless Flow',
      description: 'We design custom patios, pools, outdoor kitchens and bar areas, detailed gardens, complex hardscapes, exterior lighting, and environmental integration.',
      hook: 'Focus on environmental stewardship and creating seamless indoor-outdoor flows that maximize usable living space. Highlight our professional capacity to design landscapes that complement the main architecture.'
    },
    howSection: {
      title: 'Designing Nature',
      steps: [
        { title: 'Site Analysis', description: 'Topographical and ecological assessment.' },
        { title: 'Softscape Selection', description: 'Climate-aware planting and greenery curation.' },
        { title: 'Hardscape Design', description: 'Custom patios, pergolas, and pathways.' },
        { title: 'External Lighting', description: 'Atmospheric and security illumination.' },
        { title: 'Irrigation Planning', description: 'Sustainable watering and drainage systems.' }
      ]
    },
    gallery: [
      '/projects/venue-creekside-arts/LS_01.png',
      '/projects/venue-creekside-arts/LS_02.png',
      '/projects/venue-creekside-arts/LS_03.png',
      '/projects/venue-creekside-arts/LS_04.png',
      '/projects/venue-creekside-arts/LS_05.png'
    ]
  }
};
