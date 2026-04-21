import React, { useEffect, useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Maximize, ArrowRight, CheckCircle2, Mail, Phone, Linkedin, Instagram, Facebook, Twitter, X } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../components/Logo';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project database
  const projectsData: Record<string, any> = {
    '86-kings-lake-residence': {
      title: '86 Kings Lake Residence',
      tags: ['Residential', 'Single-Family Home', 'Luxury'],
      location: 'Humble, TX',
      year: '2025',
      area: '6,677 sqft',
      mainImage: '/projects/86-kings-lake-residence/cover.png',
      description: `The "86 Kings Lake Residence" project involves the design of a majestic two-story single-family home, conceived to offer a lifestyle of high luxury, maximum spaciousness, and comfort. The ground floor (spanning over 4,000 square feet) unfolds as the vital and social core of the home, standing out for its expansive proportions, wide hallways, and a layout that facilitates fluid circulation between the living areas and heavy-duty service zones, such as the laundry room and the large garage.

The second floor is strategically designed to optimize rest, family privacy, and intimate leisure. The spatial experience of this residence is characterized by its grand scale, achieving a strong integration between the monumental interior and the generous outdoor zones through expansive porches.`,
      features: [
        'Exceptional Spaciousness: 6,677.26 sqft total living space.',
        'Luxury-Oriented Design: Oversized spaces for maximum comfort.',
        'Expansive Outdoor Zones: 931.32 sqft back porch and 178.50 sqft front porch.',
        'Outstanding Garage Capacity: 1,226.70 sqft covered parking area.',
        'Functional Level Separation: Social ground floor and private second floor.',
        'Integrated Service Zones: Ample logistical support areas.'
      ],
      gallery: [
        '/projects/86-kings-lake-residence/R-01.png',
        '/projects/86-kings-lake-residence/R-02.png',
        '/projects/86-kings-lake-residence/R-03.png',
        '/projects/86-kings-lake-residence/R-05.png',
        '/projects/86-kings-lake-residence/R-06.png',
        '/projects/86-kings-lake-residence/R-08.png',
        '/projects/86-kings-lake-residence/DOCK R-1.jpg',
        '/projects/86-kings-lake-residence/DOCK R-2.jpg',
        '/projects/86-kings-lake-residence/DOCK R-3.jpg',
        '/projects/86-kings-lake-residence/DOCK R-4.jpg',
        '/projects/86-kings-lake-residence/R-04.jpg',
        '/projects/86-kings-lake-residence/R-07.jpeg',
        '/projects/86-kings-lake-residence/R-09.jpeg',
        '/projects/86-kings-lake-residence/R-10.jpeg',
        '/projects/86-kings-lake-residence/R-11.jpeg',
        '/projects/86-kings-lake-residence/R-12.jpeg',
        '/projects/86-kings-lake-residence/R-01.jpg',
        '/projects/86-kings-lake-residence/R-02.jpg',
        '/projects/86-kings-lake-residence/R-03.jpg',
        '/projects/86-kings-lake-residence/R-04.jpg',
        '/projects/86-kings-lake-residence/R-05.jpg',
        '/projects/86-kings-lake-residence/R-06.jpg',
        '/projects/86-kings-lake-residence/R-07.jpg',
        '/projects/86-kings-lake-residence/R-08.jpg',
        '/projects/86-kings-lake-residence/R-09.jpg',
        '/projects/86-kings-lake-residence/R-10.jpg',
        '/projects/86-kings-lake-residence/R-13.jpg',
        '/projects/86-kings-lake-residence/R-14.jpg',
        '/projects/86-kings-lake-residence/R-15.jpg',
        '/projects/86-kings-lake-residence/R-16.jpg',
        '/projects/86-kings-lake-residence/R-17.jpg',
        '/projects/86-kings-lake-residence/R-18.jpg',
        '/projects/86-kings-lake-residence/R-19.jpg',
        '/projects/86-kings-lake-residence/R-20.jpg',
        '/projects/86-kings-lake-residence/R-21.jpg',
        '/projects/86-kings-lake-residence/R-22.jpg',
        '/projects/86-kings-lake-residence/R-23.jpg',
        '/projects/86-kings-lake-residence/R-24.jpg',
        '/projects/86-kings-lake-residence/R-25.jpg',
        '/projects/86-kings-lake-residence/R-26.jpg',
        '/projects/86-kings-lake-residence/R-27.jpg',
        '/projects/86-kings-lake-residence/R-28.jpg',
        '/projects/86-kings-lake-residence/R-29.png',
        '/projects/86-kings-lake-residence/R-30.png',
        '/projects/86-kings-lake-residence/R-31.jpg',
        '/projects/86-kings-lake-residence/R-26-01.jpeg',
        '/projects/86-kings-lake-residence/R-33.jpeg',
        '/projects/86-kings-lake-residence/R-34.jpeg'
      ],
      planImages: [
        '/projects/86-kings-lake-residence/plan1.png',
        '/projects/86-kings-lake-residence/plan2.png'
      ],
      planImage: '/projects/86-kings-lake-residence/plan1.png'
    },
    'velasquez-residence': {
      title: 'Velasquez Residence',
      tags: ['Residential', 'Luxury Home'],
      location: 'Magnolia, TX',
      year: '2025',
      area: '5,390 sqft',
      mainImage: '/projects/velasquez-residence/cover.jpg',
      description: `The "Velasquez Residence" project involves the design of a spacious luxury single-family home that prioritizes family living, entertainment, and functionality. The architectural design creates a flow that begins with a front porch and a foyer, opening up to social areas that include a formal dining room. With over 5,300 square feet of interior living space and a building footprint of 7,988.72 square feet, the residence is imposingly situated on an expansive lot of over 154,000 square feet.

In the private zone, the house features a master suite (Master Room) equipped with its own bathroom (Master Bath) and walk-in closet, in addition to providing comfortable spaces for visitors, such as a guest room. For daily operations, the home presents a highly practical innovation: a secondary or support kitchen ("Dirty Kitchen") that complements the main areas. This allows for intensive food preparation without affecting the aesthetics of the social zones.`,
      features: [
        'Lot and Spaciousness: Over 154,000 sqft lot with 5,390.69 sqft living area.',
        'Master Suite and Guests: Private master zone plus designated guest room.',
        'Dirty Kitchen: Secondary kitchen for heavy-duty food preparation.',
        'Expansive Outdoor Zones: Includes 182.92 sqft front porch and 921.90 sqft covered patio.',
        'Parking Capacity: Two-car garage (1,493.21 sqft) plus a 7,793.91 sqft driveway.',
        'Dedicated Service Zones: Includes utility and laundry rooms for efficiency.'
      ],
      gallery: [
        '/projects/velasquez-residence/R-01.jpg',
        '/projects/velasquez-residence/R-02.jpg',
        '/projects/velasquez-residence/R-03.jpg',
        '/projects/velasquez-residence/R-04.jpg',
        '/projects/velasquez-residence/R-05.jpg',
        '/projects/velasquez-residence/R-06.jpg',
        '/projects/velasquez-residence/R-07.jpg',
        '/projects/velasquez-residence/R-08.jpg',
        '/projects/velasquez-residence/R-9.jpg',
        '/projects/velasquez-residence/VEL-INT-01.jpeg',
        '/projects/velasquez-residence/VEL-INT-02.jpeg',
        '/projects/velasquez-residence/VEL-INT-03.jpeg',
        '/projects/velasquez-residence/VEL-INT-04.jpeg',
        '/projects/velasquez-residence/VEL-INT-05.jpeg',
        '/projects/velasquez-residence/VEL-INT-06.jpeg',
        '/projects/velasquez-residence/VEL-INT-07.jpeg',
        '/projects/velasquez-residence/VEL-INT-08.jpeg',
        '/projects/velasquez-residence/VEL-INT-09.jpeg',
        '/projects/velasquez-residence/VEL-INT-10.jpeg',
        '/projects/velasquez-residence/VEL-INT-11.jpeg',
        '/projects/velasquez-residence/VEL-INT-12.jpeg',
        '/projects/velasquez-residence/VEL-INT-13.jpeg',
        '/projects/velasquez-residence/VEL-INT-14.jpeg',
        '/projects/velasquez-residence/VEL-INT-15.jpeg',
        '/projects/velasquez-residence/VEL-INT-16.jpeg',
        '/projects/velasquez-residence/VEL-INT-17.jpeg',
        '/projects/velasquez-residence/VEL-INT-18.jpeg'
      ],
      planImage: '/projects/velasquez-residence/plan.png'
    },
    'southline-residence': {
      title: 'Southline Residence',
      tags: ['Residential', 'Single-Family'],
      location: 'Conroe, TX',
      year: '2026',
      area: '4,664 sqft',
      mainImage: '/projects/southline-residence/cover.jpg',
      description: `The "Southline Residence" project consists of a spacious two-story single-family home designed to offer an optimal blend of comfort, functionality, and social spaces. The ground floor serves as the home's primary core, featuring social areas that integrate the living room, a kitchen equipped with a pantry, and a bar area, fostering an open and connected spatial experience.

Additionally, privacy and comfort are ensured through a spacious master suite with its own bathroom and walk-in closet, complemented by a private office separated from the high-traffic areas. The architectural design achieves a fluid transition between the interior and exterior through generous outdoor spaces, including covered patios and porches.`,
      features: [
        'Extensive Living Space: 4,664.52 sq ft of luxury interior space.',
        'Luxury Master Suite: Ground floor location with pocket doors.',
        'Expansive Outdoor Zones: Over 800 sq ft back porch and multiple patios.',
        'Integrated Entertainment: Living, kitchen, and bar area for social leisure.',
        'Private Office: Dedicated work-from-home space on the first level.',
        'Integrated Garage: Large 632.36 sq ft enclosed garage.'
      ],
      gallery: [
        '/projects/southline-residence/R-1.jpg',
        '/projects/southline-residence/R-2.jpg',
        '/projects/southline-residence/R-3.jpg',
        '/projects/southline-residence/R-4.jpg',
        '/projects/southline-residence/R-5.jpg',
        '/projects/southline-residence/R-6.jpg',
        '/projects/southline-residence/SUR-R-01.jpeg',
        '/projects/southline-residence/SUR-R-02.jpeg',
        '/projects/southline-residence/SUR-R-03.jpeg',
        '/projects/southline-residence/SUR-R-04.jpeg',
        '/projects/southline-residence/SUR-R-05.jpeg',
        '/projects/southline-residence/SUR-R-06.jpeg',
        '/projects/southline-residence/SUR-R-07.jpeg',
        '/projects/southline-residence/SUR-R-08.jpeg',
        '/projects/southline-residence/SUR-R-09.jpeg',
        '/projects/southline-residence/SUR-R-10.jpeg',
        '/projects/southline-residence/SUR-R-11.jpeg',
        '/projects/southline-residence/SUR-R-12.jpeg',
        '/projects/southline-residence/SUR-R-13.jpeg',
        '/projects/southline-residence/SUR-R-14.jpeg',
        '/projects/southline-residence/SUR-R-15.jpeg',
        '/projects/southline-residence/SUR-R-16.jpeg',
        '/projects/southline-residence/R-7.jpg',
        '/projects/southline-residence/R-8.png',
        '/projects/southline-residence/R-9.jpg',
        '/projects/southline-residence/R-10.png',
        '/projects/southline-residence/R-11.png',
        '/projects/southline-residence/R-12.png'
      ],
      planImage: '/projects/southline-residence/plan.png'
    },
    'grand-lakes-padel': {
      title: 'Grand Lakes Padel',
      tags: ['Commercial', 'Sports Facility', 'Indoor'],
      location: 'Houston, TX',
      year: '2024',
      area: '17,636 sqft',
      mainImage: '/projects/grand-lakes-padel/EXT-01.jpg',
      description: `Designed by ARCHCOS, Grand Lakes Padel is a premier indoor sports facility that elevates the rapidly growing sport of padel. Spanning an impressive 17,636 square feet, this state-of-the-art complex is meticulously crafted to blend high-performance athletic requirements with modern, user-focused architecture. Our goal was to create a dynamic hub where athletic passion meets architectural precision.

The expansive open-span structure features soaring 31-foot ceilings, ensuring an unrestricted and immersive playing environment. A central spine—the main hallway—creates a clear, symmetrical circulation path. This layout efficiently guides athletes and visitors through the venue, ensuring that the movement of people never disrupts the focus and flow of the games.

Beyond the courts, ARCHCOS designed Grand Lakes Padel to foster community, comfort, and socialization. The architectural program includes a contemporary lobby, premium support facilities, and a seamless integration of all amenities to maximize natural flow and aesthetic appeal.`,
      features: [
        'Professional-Grade Courts: Five professional indoor padel courts.',
        'Expansive Scale: 17,636 sqft facility with 31-foot ceilings.',
        'Symmetrical Layout: Central hallway for fluid visitor circulation.',
        'Community Hub: Contemporary lobby and networking areas.',
        'Full Accessibility: Modern ADA-compliant locker rooms and showers.',
        'High-Performance Design: Laminated tempered safety glass enclosures.'
      ],
      gallery: [
        '/projects/grand-lakes-padel/EXT-01.jpg',
        '/projects/grand-lakes-padel/EXT-02.jpg',
        '/projects/grand-lakes-padel/EXT-03.jpg',
        '/projects/grand-lakes-padel/EXT-04.jpg',
        '/projects/grand-lakes-padel/EXT-05.jpg',
        '/projects/grand-lakes-padel/EXT-06.jpg',
        '/projects/grand-lakes-padel/INT-A-01.jpeg',
        '/projects/grand-lakes-padel/INT-A-02.jpeg',
        '/projects/grand-lakes-padel/INT-A-03.jpeg',
        '/projects/grand-lakes-padel/INT-A-04.jpeg',
        '/projects/grand-lakes-padel/INT-A-05.jpeg',
        '/projects/grand-lakes-padel/INT-A-06.jpeg',
        '/projects/grand-lakes-padel/INT-A-07.jpeg',
        '/projects/grand-lakes-padel/INT-A-08.jpeg',
        '/projects/grand-lakes-padel/INT-A-09.jpeg',
        '/projects/grand-lakes-padel/INT-A-10.jpeg',
        '/projects/grand-lakes-padel/INT-A-11.jpeg',
        '/projects/grand-lakes-padel/INT-A-12.jpeg',
        '/projects/grand-lakes-padel/INT-B-01.jpeg',
        '/projects/grand-lakes-padel/INT-B-02.jpeg',
        '/projects/grand-lakes-padel/INT-B-03.jpeg',
        '/projects/grand-lakes-padel/INT-B-04.jpeg'
      ],
      planImage: '/projects/grand-lakes-padel/plan.png'
    },
    'road-west-racket-social-club': {
      title: 'Road West Racket Social Club',
      tags: ['Commercial', 'Sports Facility', 'Social Club'],
      location: 'Houston, TX',
      year: '2024',
      area: '25,223 sqft',
      mainImage: '/projects/road-west-racket-social-club/R-01.png',
      description: `ROAD WEST RACKET SOCIAL CLUB is a visionary sports and wellness complex, designed for those who seek more than just a place to play. We are transforming the open-air padel concept, fusing the precision of elite competition with the warmth of a world-class social club.

Situated on an expansive, expertly curated site of approximately 29,218 sqft, ROAD WEST RACKET SOCIAL CLUB is not just a collection of courts; it is an architectural sanctuary. Our design is a sophisticated, modular blueprint focused on community, architectural harmony, and the celebration of nature. With 25,223 sqft of dedicated construction area, we offer an unparalleled environment designed for players who value performance and connection in equal measure.

The facility is a masterpiece of spatial flow, balancing dedicated play zones with abundant spaces for social interaction, all while maximizing the presence of natural elements.`,
      features: [
        'Architecturally Framed Performance: Elegant structural frames defining 19,052 sqft of court space.',
        'Nature-Integrated Oasis: Lush foliage and trailing jasmine integrated into the structural framework.',
        'The Social Hub: 4,019 sqft central building with reception, lounge, and boutique cafe.',
        'Exceptional Detail: Meticulously curated aggregated gravel pathways and cutting-edge court surfaces.',
        'Comprehensive Support: 2,153 sqft of dedicated service and storage space.',
        'Modular Architectural Design: A grid-based blueprint focusing on harmony and community.'
      ],
      gallery: [
        '/projects/road-west-racket-social-club/R-01.png',
        '/projects/road-west-racket-social-club/R-02.png',
        '/projects/road-west-racket-social-club/R-03.png',
        '/projects/road-west-racket-social-club/R-04.png',
        '/projects/road-west-racket-social-club/R-05.png',
        '/projects/road-west-racket-social-club/R-06.png',
        '/projects/road-west-racket-social-club/R-07.png',
        '/projects/road-west-racket-social-club/R-08.png',
        '/projects/road-west-racket-social-club/R-09.png',
        '/projects/road-west-racket-social-club/R-10.png',
        '/projects/road-west-racket-social-club/R-11.png',
        '/projects/road-west-racket-social-club/R-12.png',
        '/projects/road-west-racket-social-club/R-13.jpg'
      ],
      planImage: '/projects/road-west-racket-social-club/plan.png'
    },
    'london': {
      title: 'London House',
      tags: ['Residential', 'Single-Family Home', 'Luxury'],
      location: 'Magnolia, TX',
      year: '2024',
      area: '5,263 sqft',
      mainImage: '/projects/london/R-01.png',
      description: `The LONDON project is a definitive statement in modern-contemporary luxury, where meticulous architectural planning creates an expansive compound centered on a seamless indoor-outdoor lifestyle. This spectacular single-family residence is a masterpiece of master-planned living, designed for those who seek a sophisticated sanctuary.

The core concept revolves around curated lifestyle zones, dramatic scale, and a sophisticated material palette. Spanning 5,263 sqft of conditioned interior space and an additional 1,996 sqft of covered outdoor living, this residence is designed for both public scale and private retreat. Multiple double-height volumes and strategically placed open-to-below spaces create a dramatic multi-level experience throughout the home.`,
      features: [
        'Expansive Luxury Living: 5,263 sqft conditioned interior space.',
        'Seamless Indoor-Outdoor Flow: 1,996 sqft of covered porches and outdoor living.',
        'Curated Social Core: 1,114 sqft open-concept living, dining, and kitchen heart.',
        'Private Sanctuary Wing: Grand 1,031 sqft dedicated Master Suite wing on the first floor.',
        'Dramatic Architectural Volume: Double-height Foyer and Study with open-to-below spaces.',
        'Lifestyle Amenities: Dedicated Study, Game Room with dry bar, and wine cellar.',
        'Premium Vehicle Support: Porto Cochere leading to a 3-car garage.',
        'Private Retreats: Three beautifully appointed guest bedrooms on the second floor.'
      ],
      gallery: [
        '/projects/london/R-01.png',
        '/projects/london/R-02.png',
        '/projects/london/R-03.png',
        '/projects/london/R-04.png',
        '/projects/london/LONDON-A-01.jpeg',
        '/projects/london/LONDON-A-02.png',
        '/projects/london/LONDON-A-03.png',
        '/projects/london/LONDON-A-04.jpeg',
        '/projects/london/LONDON-A-05.png',
        '/projects/london/LONDON-A-06.png',
        '/projects/london/LONDON-A-07.jpeg',
        '/projects/london/LONDON-A-08.jpeg',
        '/projects/london/LONDON-A-09.jpeg',
        '/projects/london/LONDON-A-10.jpeg',
        '/projects/london/LONDON-A-11.png'
      ],
      planImage: ['/projects/london/plan-01.png', '/projects/london/plan-02.png']
    },
    'paris': {
      title: 'Paris House',
      tags: ['Residential', 'Townhome', 'Modern'],
      location: 'Magnolia, TX',
      year: '2024',
      area: '2,017 sqft',
      mainImage: '/projects/paris/R-01.png',
      description: `PARIS is a spectacular two-story residential townhome located within the prestigious Harmony Reserve Townhomes development. This project offers a highly functional and modern approach to luxury living, expertly divided across 2,017.64 sqft to maximize both shared family areas and private retreats.

The first floor (818.64 sqft) is designed for daily activity, featuring an open-concept living core where the kitchen and living room seamlessly connect. A dedicated office provides a quiet workspace, while the ground level is completed by a spacious garage and a covered back porch that extends the living area outdoors.

The expansive second floor (1,199 sqft) is entirely dedicated to rest and privacy. It is highlighted by a luxurious master suite sanctuary featuring a large master bathroom, a generous walk-in closet, and a private balcony. Two additional comfortable bedrooms and a dedicated laundry room ensure this level perfectly accommodates modern family living.`,
      features: [
        'Total Living Space: 2,017.64 sqft of expertly designed interior.',
        'Intelligent Spatial Distribution: Dedicated social first floor and private second floor.',
        'Master Suite Sanctuary: Includes walk-in closet, master bath, and private balcony.',
        'Modern Open-Concept Core: Seameless flow between kitchen and living areas.',
        'Dedicated Home Office: Private workspace integrated into the first floor layout.',
        'Outdoor Living: 143.17 sqft covered back porch for seamless indoor-outdoor transition.',
        'Spacious Garage: 386.00 sqft of dedicated vehicle and storage space.',
        'Premium Location: Situated within the Harmony Reserve development in Magnolia, TX.'
      ],
      gallery: [
        '/projects/paris/R-01.png',
        '/projects/paris/R-02.png',
        '/projects/paris/R-03.png',
        '/projects/paris/R-04.png',
        '/projects/paris/R-05.png',
        '/projects/paris/R-06.png',
        '/projects/paris/INT-01.jpeg',
        '/projects/paris/INT-02.jpeg',
        '/projects/paris/INT-03.jpeg',
        '/projects/paris/INT-04.jpeg',
        '/projects/paris/INT-05.jpeg',
        '/projects/paris/INT-06.jpeg',
        '/projects/paris/INT-07.jpeg',
        '/projects/paris/INT-08.jpeg',
        '/projects/paris/INT-09.jpeg',
        '/projects/paris/INT-10.jpeg',
        '/projects/paris/INT-11.jpeg'
      ],
      planImage: '/projects/paris/plan.png'
    },
    'melbourne': {
      title: 'Melbourne House',
      tags: ['Residential', 'Townhome', 'Modern'],
      location: 'Magnolia, TX',
      year: '2024',
      area: '2,140 sqft',
      mainImage: '/projects/melbourne/EXT-01.jpg',
      description: `The MELBOURNE house, a signature residence within the Buckshot Townhomes community, offers a thoughtfully crafted two-story layout. With a total living space of 2,139.58 sqft, this home is expertly designed to maximize both shared entertainment areas and secluded private quarters.

The first floor (912.25 sqft) provides an inviting, functional space establishing the perfect core for daily family life. The indoor space extends effortlessly to a 139.90 sqft covered back porch, ideal for outdoor dining. The expansive second floor (1,227.33 sqft) is dedicated entirely to rest and relaxation, highlighted by a luxurious master suite with an exclusive private balcony.`,
      features: [
        'Total Living Space: 2,139.58 sqft across two meticulously designed levels.',
        'Open-Concept Core: Spacious 912.25 sqft first floor optimized for family connection.',
        'Indoor-Outdoor Harmony: Seamless transition to a 139.90 sqft covered back porch.',
        'Master Suite Sanctuary: Private 1,227.33 sqft upper level with master balcony.',
        'Buckshot Townhomes Community: Premium location within a signature development.',
        'Functional Guest Accommodations: Two additional well-appointed bedrooms on the upper floor.',
        'Convenient Amenities: Centralized second-floor laundry room.',
        'Secure Vehicle Space: 380.53 sqft dedicated garage.'
      ],
      gallery: [
        '/projects/melbourne/EXT-01.jpg',
        '/projects/melbourne/EXT-02.png',
        '/projects/melbourne/EXT-03.png',
        '/projects/melbourne/EXT-04.png',
        '/projects/melbourne/EXT-05.png',
        '/projects/melbourne/EXT-06.png',
        '/projects/melbourne/R-01.jpeg',
        '/projects/melbourne/R-02.jpeg',
        '/projects/melbourne/R-03.jpeg',
        '/projects/melbourne/R-04.jpeg',
        '/projects/melbourne/R-05.jpeg',
        '/projects/melbourne/R-06.jpeg',
        '/projects/melbourne/R-07.jpeg',
        '/projects/melbourne/R-08.jpeg',
        '/projects/melbourne/R-09.jpeg',
        '/projects/melbourne/R-10.jpeg',
        '/projects/melbourne/R-11.jpeg',
        '/projects/melbourne/R-12.jpeg',
        '/projects/melbourne/R-13.jpeg',
        '/projects/melbourne/R-14.jpeg',
        '/projects/melbourne/R-15.jpeg',
        '/projects/melbourne/R-16.jpeg'
      ],
      planImage: '/projects/melbourne/plan.png'
    },
    'amsterdam': {
      title: 'Amsterdam House',
      tags: ['Residential', 'Three-Story Townhome', 'Modern'],
      location: 'Magnolia, TX',
      year: '2024',
      area: '2,509 sqft',
      mainImage: '/projects/amsterdam/EXT-01.jpg',
      description: `The AMSTERDAM project, a signature residence within the exclusive Harmony Reserve Townhomes, showcases an intelligent and highly functional approach to multi-level living. Spread across three beautifully appointed floors, this home offers a dynamic layout designed to balance vibrant family life with secluded, private relaxation.

The ground floor establishes a welcoming tone with 917 SQFT of primary living space, featuring an open kitchen design that flows effortlessly out to a 143 SQFT covered back porch. The second level (1,097 SQFT) is dedicated to private family quarters, highlighted by a luxurious master suite. The defining feature is the third-floor retreat—a 494 SQFT entertainment and guest sanctuary with a private balcony.`,
      features: [
        'Total Living Space: 2,509 SQFT across three optimized levels.',
        'Dynamic Vertical Layout: Ground floor social core, private 2nd floor, and 3rd floor retreat.',
        '3rd-Floor Entertainment Hub: Dedicated game room with an elevated private balcony.',
        'Master Suite Sanctuary: Expansive second-floor suite with walk-in closet and private bath.',
        'Indoor-Outdoor Flow: 143 SQFT covered back porch for seamless entertainment.',
        'Multi-Functional Guest Space: Versatile third-floor guest suite with en-suite bath.',
        'Vertical Space Optimization: Masterful blend of community and privacy.',
        'Harmony Reserve Development: Located in the prestigious Magnolia, TX community.'
      ],
      gallery: [
        '/projects/amsterdam/EXT-01.jpg',
        '/projects/amsterdam/EXT-02.jpg',
        '/projects/amsterdam/EXT-03.jpg',
        '/projects/amsterdam/EXT-04.png',
        '/projects/amsterdam/EXT-05.png',
        '/projects/amsterdam/EXT-06.png',
        '/projects/amsterdam/R-01.jpeg',
        '/projects/amsterdam/R-02.jpeg',
        '/projects/amsterdam/R-03.jpeg',
        '/projects/amsterdam/R-04.jpeg',
        '/projects/amsterdam/R-05.jpeg',
        '/projects/amsterdam/R-06.jpeg',
        '/projects/amsterdam/R-07.jpeg',
        '/projects/amsterdam/R-08.jpeg',
        '/projects/amsterdam/R-09.jpeg',
        '/projects/amsterdam/R-10.jpeg',
        '/projects/amsterdam/R-11.jpeg',
        '/projects/amsterdam/R-12.jpeg',
        '/projects/amsterdam/R-13.jpeg',
        '/projects/amsterdam/R-14.jpeg',
        '/projects/amsterdam/R-15.jpeg',
        '/projects/amsterdam/R-16.jpeg',
        '/projects/amsterdam/R-17.jpeg'
      ],
      planImage: '/projects/amsterdam/plan.png'
    },
    'auckland': {
      title: 'Auckland House',
      tags: ['Residential', 'Symmetrical Duplex', 'Modern'],
      location: '33311 Buckshot Ln, Magnolia, TX',
      year: '2026',
      area: '2,820 sqft',
      mainImage: '/projects/auckland/EXT-01.png',
      description: `The AUCKLAND HOUSE is a masterfully designed symmetrical duplex residences located within the Harmony Reserve Townhomes community. This project represents a contemporary vision of luxury living, where balance and architectural harmony define every space.

The ground floor (1,224.41 sqft) proposes an open and social concept, fluidly integrating the kitchen and living areas with a dedicated office space for the modern work-from-home lifestyle. The second floor (1,595.32 sqft) is meticulously crafted for privacy and family dynamics, featuring a central game room that serves as the heart of the upper level, connecting all private quarters.`,
      features: [
        'Symmetrical Duplex Design: Two mirrored luxury units with independent multi-car garages.',
        'Total Living Excellence: ~2,820 sqft of expertly curated living space.',
        'Professional Home Office: Dedicated workspace on the first floor for maximum productivity.',
        'Upper-Level Sanctuary: 1,595 sqft of private family space and recreation.',
        'Central Game Room: A vertical hub that articulates and connects the second-floor bedrooms.',
        'Grand Master Suite: Features an oversized walk-in closet and high-end bath finishes.',
        'Indoor-Outdoor Integration: Expansive 291 sqft covered back porch for social interaction.',
        'Premium Location: Situated within the exclusive Harmony Reserve development in Magnolia, TX.'
      ],
      gallery: [
        '/projects/auckland/EXT-01.png',
        '/projects/auckland/EXT-02.png',
        '/projects/auckland/EXT-03.png',
        '/projects/auckland/EXT-04.png',
        '/projects/auckland/EXT-05.png',
        '/projects/auckland/EXT-06.png',
        '/projects/auckland/R-01.jpeg',
        '/projects/auckland/R-02.jpeg',
        '/projects/auckland/R-03.jpeg',
        '/projects/auckland/R-04.jpeg',
        '/projects/auckland/R-05.jpeg',
        '/projects/auckland/R-06.jpeg',
        '/projects/auckland/R-07.jpeg',
        '/projects/auckland/R-08.jpeg',
        '/projects/auckland/R-09.jpeg',
        '/projects/auckland/R-10.jpeg',
        '/projects/auckland/R-11.jpeg',
        '/projects/auckland/R-12.jpeg',
        '/projects/auckland/R-13.jpeg',
        '/projects/auckland/R-14.jpeg',
        '/projects/auckland/R-15.jpeg',
        '/projects/auckland/R-16.jpeg',
        '/projects/auckland/R-17.jpeg',
        '/projects/auckland/R-18.jpeg',
        '/projects/auckland/R-19.jpeg',
        '/projects/auckland/R-20.jpeg'
      ],
      planImage: '/projects/auckland/plan.png'
    },
    'barcelona': {
      title: 'Barcelona House',
      tags: ['Residential', 'Contemporary Townhome', 'Modern'],
      location: '33311 Buckshot Ln, Magnolia, TX',
      year: '2024',
      area: '3,114 sqft',
      mainImage: '/projects/barcelona/EXT-01.png',
      description: `The BARCELONA HOUSE represents a masterful example of contemporary townhome design within the Harmony Reserve development. With a total living space of 3,114.34 sqft, this residence is expertly crafted to balance large-scale social interaction with precise functional zoning across two beautifully appointed levels.

The ground floor (1,429.42 sqft) features a sophisticated open-concept core that connects the primary living room, formal dining area, and a gourmet kitchen with an integrated breakfast nook. A dedicated front office provides a professional workspace, while a functional mudroom connects the social areas to the private garage. The second floor (1,684.92 sqft) is designed for privacy, centering around a versatile game room that connects a luxurious master suite with private balcony to additional family quarters.`,
      features: [
        'Contemporary Social Core: Seamlessly integrated living, dining, and breakfast nook areas.',
        'Grand Living Space: 3,114.34 sqft of high-end interior architecture.',
        'Master Suite Sanctuary: Expansive bedroom with double walk-in closet and private balcony.',
        'Professional Office: Dedicated 1st-floor office space for concentrated remote work.',
        'Private Mudroom Entry: Efficient transition from the 376.81 sqft garage to the home.',
        'Entertainment Hub: Generous 2nd-floor game room designed for family relaxation.',
        'Indoor-Outdoor Connectivity: 177.36 sqft covered back porch for social interaction.',
        'Symmetrical Architectural Detail: Ideal for high-end townhome developments.'
      ],
      gallery: [
        '/projects/barcelona/EXT-01.png',
        '/projects/barcelona/EXT-02.png',
        '/projects/barcelona/EXT-03.png',
        '/projects/barcelona/EXT-04.png',
        '/projects/barcelona/EXT-05.png',
        '/projects/barcelona/EXT-06.png',
        '/projects/barcelona/R-01.jpeg',
        '/projects/barcelona/R-02.jpeg',
        '/projects/barcelona/R-03.jpeg',
        '/projects/barcelona/R-04.jpeg',
        '/projects/barcelona/R-05.jpeg',
        '/projects/barcelona/R-06.jpeg',
        '/projects/barcelona/R-07.jpeg',
        '/projects/barcelona/R-08.jpeg',
        '/projects/barcelona/R-09.jpeg',
        '/projects/barcelona/R-10.jpeg',
        '/projects/barcelona/R-11.jpeg',
        '/projects/barcelona/R-13.jpeg',
        '/projects/barcelona/R-14.jpeg',
        '/projects/barcelona/R-15.jpeg',
        '/projects/barcelona/R-16.jpeg'
      ],
      planImage: '/projects/barcelona/plan.png'
    },
    'pasteko': {
      title: 'Pasteko',
      tags: ['Commercial', 'Fast-Casual', 'Interior Design'],
      location: 'Commercial Project',
      year: '2024',
      area: 'Commercial Space',
      mainImage: '/projects/pasteko/PORTADA DE PASTEKO 02.png',
      description: `Architectural Narrative: PASTEKO Commercial Project
Architectural Concept & User Experience: The interior and architectural design of the PASTEKO branch is conceived under the premise of blending the efficiency of a fast-casual commercial space with the warmth and tradition that the brand represents. The primary goal is to create a dynamic and welcoming atmosphere that invites consumption while simultaneously optimizing the operational workflow for the staff and the pedestrian circulation of the customers.

Spatial Distribution & Flow (Layout): The space is strategically divided to ensure a seamless operation and an intuitive user experience. Service and Exhibition Area (Focal Point) is designed as the visual heart of the project, featuring an ergonomic counter and clean display cases. The Dining Area is a versatile space designed to maximize occupancy capacity without sacrificing comfort, while the Operational Zone (Back of House) is connected through a direct flow to the service line, ensuring efficient delivery times and maintaining the visual cleanliness of the public area.

Materiality, Textures, & Lighting: The finishes palette aims to convey hygiene, modernity, and comfort through balanced textures (warm-toned woods contrasted with neutral ceramics and quartz countertops) that translate perfectly into high-fidelity photorealistic renders. A layered lighting design features warm, directional light over display areas and ambient lighting in the dining area to generate a sense of hospitality.`,
      features: [
        'Strategic Spatial Flow: Optimized layout for seamless customer and staff circulation.',
        'High-Fidelity Materiality: Balanced use of warm woods and contemporary durable surfaces.',
        'Focal Service Area: Ergonomic counter and display cases designed as the project heart.',
        'Layered Lighting Design: Warm ambient light combined with directional highlights for products.',
        'Spatial Branding: Elegant integration of corporate tones through architectural accents.',
        'Versatile Dining Layout: Efficient seating mix of high-top bars and standard booths.',
        'Hygienic Material Palette: Neutral ceramics and quartz countertops for commercial durability.',
        'Operational Efficiency: Isolated yet connected back-of-house operational zone.'
      ],
      gallery: [
        '/projects/pasteko/PORTADA DE PASTEKO 02.png',
        '/projects/pasteko/PORTADA DE PASTEKO-.png',
        '/projects/pasteko/004.png',
        '/projects/pasteko/1.jpg',
        '/projects/pasteko/3.jpg',
        '/projects/pasteko/3A.jpg',
        '/projects/pasteko/4.jpg',
        '/projects/pasteko/5.jpg',
        '/projects/pasteko/6.jpg',
        '/projects/pasteko/7.jpg',
        '/projects/pasteko/8.jpg',
        '/projects/pasteko/22.jpg',
        '/projects/pasteko/A.jpg',
        '/projects/pasteko/B.jpg',
        '/projects/pasteko/C.jpg',
        '/projects/pasteko/D.jpg',
        '/projects/pasteko/E.jpg'
      ]
    },
    'empire-cookies': {
      title: 'Empire Cookies',
      tags: ['Commercial Rollout', 'Bakery'],
      location: 'Houston, TX',
      year: '2024',
      area: '1,030 sqft',
      mainImage: '/projects/empire-cookies/R-19.png',
      description: `The "Empire Cookies" project involves the interior design and spatial layout of a 1,030.00 square foot commercial space located in Houston, Texas. The architectural concept focuses on creating a highly efficient workflow for food preparation, balanced with an attractive front-of-house area for the customer. The public part of the venue features a cashier area along with a sitting area of 458.31 sqft, which stands out for its 15-foot high ceilings that give a sense of spaciousness to the environment.

Behind the counter, the spatial experience becomes strictly operational and industrial. The 398.16 sqft preparation kitchen is meticulously zoned to maximize productivity, logically separating the mixer area, work tables and sanitization, refrigeration and freezer zones, and a station dedicated exclusively to packaging. This layout ensures a continuous and uninterrupted process from product elaboration until it reaches the customer's hands.`,
      features: [
        'Optimized Customer Service Space: 15-foot ceilings for greater comfort.',
        'Segmented Preparation Kitchen: 398.16 sqft with specialized zones.',
        'Linear Production Flow: Seamless transition to packaging area.',
        'Cold and Storage Capacity: Complete refrigeration and storage.',
        'Universal Accessibility: Fully ADA compliant restroom.',
        'Differentiated Height Design: 15ft front-of-house to 10ft operational zone transition.'
      ],
      gallery: [
        '/projects/empire-cookies/R-27.png',
        '/projects/empire-cookies/R-26.png',
        '/projects/empire-cookies/R-25.png',
        '/projects/empire-cookies/R-24.png',
        '/projects/empire-cookies/R-23.png',
        '/projects/empire-cookies/R-22.png',
        '/projects/empire-cookies/R-21.png',
        '/projects/empire-cookies/R-20.png',
        '/projects/empire-cookies/R-19.png',
        '/projects/empire-cookies/R-18.png'
      ],
      planImage: '/projects/empire-cookies/plan.png'
    },
    'venue-creekside-arts': {
      title: 'Venue Creekside Arts',
      tags: ['Commercial', 'Event Venue', 'Monumental'],
      location: 'Tomball, TX',
      year: '2026',
      area: '28,257 sqft',
      mainImage: '/projects/venue-creekside-arts/EXT-14.png',
      description: `VENUE CREEKSIDE ARTS is a monumental 28,257-square-foot event center designed to host large-scale gatherings with a sophisticated blend of grandeur and operational precision. The architectural heart of the project is the massive 11,283.00 sqft Ballroom, a high-capacity social core conceived to accommodate diverse event formats from banquets to corporate conventions.

The spatial layout segregates hospitality and preparative functions across two levels. While the ground floor focuses on the primary event experience and exclusive preparative suites—including a dedicated Bridal Suite and specialized lounges—the second floor offers elevated perspectives with private dining areas. The facility is supported by high-performance commercial infrastructure, including a 1,000 sqft main kitchen, ensuring seamless logistical flow for the most demanding events.`,
      features: [
        'Monumental Social Core: 11,283 sqft Ballroom for high-capacity events.',
        'Sophisticated Guest Flow: Segmented hospitality and preparative zones.',
        'High-Performance Logistics: 1,008 sqft commercial grade main kitchen.',
        'Exclusive Hospitality Suites: Dedicated Bridal Suite and Cigar Lounge.',
        'Multi-Level Experience: 2nd-floor private dining overlooking the core.',
        'Expansive Covered Porches: Over 2,700 sqft of integrated outdoor transition space.',
        'Comprehensive Support: Industrial-grade cold storage and operational support zones.',
        'Universal Accessibility: High-capacity elevators and strategic stairway placement.'
      ],
      gallery: [
        '/projects/venue-creekside-arts/EXT-14.png',
        '/projects/venue-creekside-arts/EXT-02.png',
        '/projects/venue-creekside-arts/EXT-03.png',
        '/projects/venue-creekside-arts/EXT-04.png',
        '/projects/venue-creekside-arts/EXT-05.png',
        '/projects/venue-creekside-arts/EXT-06.png',
        '/projects/venue-creekside-arts/EXT-07.png',
        '/projects/venue-creekside-arts/EXT-08.png',
        '/projects/venue-creekside-arts/EXT-09.png',
        '/projects/venue-creekside-arts/EXT-10.png',
        '/projects/venue-creekside-arts/EXT-11.png',
        '/projects/venue-creekside-arts/INT-01.png',
        '/projects/venue-creekside-arts/INT-02.png',
        '/projects/venue-creekside-arts/INT-03.png',
        '/projects/venue-creekside-arts/INT-04.png',
        '/projects/venue-creekside-arts/INT-05.png',
        '/projects/venue-creekside-arts/INT-06.png',
        '/projects/venue-creekside-arts/INT-07.png',
        '/projects/venue-creekside-arts/INT-08.png',
        '/projects/venue-creekside-arts/INT-09.png',
        '/projects/venue-creekside-arts/INT-10.png',
        '/projects/venue-creekside-arts/INT-11.png',
        '/projects/venue-creekside-arts/INT-12.png',
        '/projects/venue-creekside-arts/INT-13.png',
        '/projects/venue-creekside-arts/INT-14.png',
        '/projects/venue-creekside-arts/INT-15.png',
        '/projects/venue-creekside-arts/INT-16.png',
        '/projects/venue-creekside-arts/INT-17.png',
        '/projects/venue-creekside-arts/INT-18.png',
        '/projects/venue-creekside-arts/INT-19.png',
        '/projects/venue-creekside-arts/INT-20.png',
        '/projects/venue-creekside-arts/INT-21.png',
        '/projects/venue-creekside-arts/INT-22.png',
        '/projects/venue-creekside-arts/INT-23.png',
        '/projects/venue-creekside-arts/INT-24.png',
        '/projects/venue-creekside-arts/INT-25.png',
        '/projects/venue-creekside-arts/INT-26.png',
        '/projects/venue-creekside-arts/INT-27.png',
        '/projects/venue-creekside-arts/INT-28.png',
        '/projects/venue-creekside-arts/INT-29.png',
        '/projects/venue-creekside-arts/INT-30.png',
        '/projects/venue-creekside-arts/INT-31.png',
        '/projects/venue-creekside-arts/INT-32.png',
        '/projects/venue-creekside-arts/INT-33.png',
        '/projects/venue-creekside-arts/INT-34.png',
        '/projects/venue-creekside-arts/INT-35.png',
        '/projects/venue-creekside-arts/INT-36.png',
        '/projects/venue-creekside-arts/INT-37.png',
        '/projects/venue-creekside-arts/INT-38.png',
        '/projects/venue-creekside-arts/INT-39.png',
        '/projects/venue-creekside-arts/INT-40.png',
        '/projects/venue-creekside-arts/INT-41.png',
        '/projects/venue-creekside-arts/INT-42.png',
        '/projects/venue-creekside-arts/INT-43.png',
        '/projects/venue-creekside-arts/INT-44.png',
        '/projects/venue-creekside-arts/INT-45.png',
        '/projects/venue-creekside-arts/INT-46.png',
        '/projects/venue-creekside-arts/INT-47.png',
        '/projects/venue-creekside-arts/INT-48.png',
        '/projects/venue-creekside-arts/INT-49.png',
        '/projects/venue-creekside-arts/INT-50.png',
        '/projects/venue-creekside-arts/INT-51.png',
        '/projects/venue-creekside-arts/INT-52.png',
        '/projects/venue-creekside-arts/INT-53.png',
        '/projects/venue-creekside-arts/INT-54.png',
        '/projects/venue-creekside-arts/INT-55.png',
        '/projects/venue-creekside-arts/INT-56.png',
        '/projects/venue-creekside-arts/INT-57.png',
        '/projects/venue-creekside-arts/INT-58.png',
        '/projects/venue-creekside-arts/LS_01.png',
        '/projects/venue-creekside-arts/LS_02.png',
        '/projects/venue-creekside-arts/LS_03.png',
        '/projects/venue-creekside-arts/LS_04.png',
        '/projects/venue-creekside-arts/LS_05.png'
      ],
      planImage: [
        '/projects/venue-creekside-arts/plan-1.png',
        '/projects/venue-creekside-arts/plan-2.png'
      ],
      landscape: {
        coverImage: '/projects/venue-creekside-arts/LS_03.png',
        title: 'Landscape Design: Social Core Integration',
        description: 'The landscape architecture at Creekside Arts is conceived as a seamless extension of the interior social spaces. Centered around the iconic "tree-concept" bar, the design integrates tropical lushness with contemporary lounging zones and aquatic accents, creating a high-fidelity environment for sophisticated outdoor gatherings.'
      }
    },
    'elmfield-drive-studio': {
      title: 'MAKE ART - STUDIO',
      tags: ['Commercial', 'Educational', 'Interior Design'],
      location: '25903 Elmfield Dr, Suite 200, Spring, TX',
      year: '2024',
      area: '2,257.5 sqft',
      mainImage: '/projects/elmfield-drive-studio/R-01.png',
      description: `MAKE ART - STUDIO is a specialized educational and commercial space designed to foster creativity within a highly functional, contemporary environment. Spanning 2,257.5 square feet, the architectural layout is optimized for an interactive learning experience, guiding users from a professional reception and library hub into two primary creative zones.

The heart of the studio is a generous, industrially-inspired Sinks Area, strategically positioned to support artistic activities while maintaining a clean spatial flow. The project adheres to rigorous ADA/TAS accessibility standards and Life Safety regulations, ensuring a secure and inclusive environment. The materiality features a blend of contemporary industrial finishes, floor-to-ceiling glazing for natural light, and a signature metal panel exterior that defines its commercial presence.`,
      features: [
        'Strategic Educational Flow: Optimized layout with Reception and Library hub.',
        'Dual Creative Zones: Specialized Classroom 1 (588 sqft) and Classroom 2 (449 sqft).',
        'Functional Core: Generous 402 sqft Sinks Area designed for artistic logistics.',
        'High-Fidelity Materiality: Industrial-contemporary interiors with metal panel accents.',
        'Natural Light Optimization: Floor-to-ceiling windows with metal canopy shading.',
        'Full Accessibility: Strict compliance with TAS/ADA standards and inclusive facilities.',
        'Operational Efficiency: Dedicated Breakroom and industrial-grade storage zones.',
        'Life Safety Precision: Engineered evacuation and fire safety architectural planning.'
      ],
      gallery: Array.from({ length: 30 }, (_, i) => `/projects/elmfield-drive-studio/R-${(i + 1).toString().padStart(2, '0')}.png`),
      planImage: '/projects/elmfield-drive-studio/plan.png'
    },
    'express-tire-shop': {
      title: 'EXPRESS TIRE SHOP',
      tags: ['Commercial', 'Automotive Workshop', 'Industrial'],
      location: '11385 HWY 105 E, Conroe, TX',
      year: '2024',
      area: '4,000 sqft',
      mainImage: '/projects/express-tire-shop/01.jpg',
      description: `EXPRESS TIRE SHOP is a 4,000 square foot commercial automotive facility designed with a focus on operational precision and customer experience. The architectural concept establishes a clear functional separation between the high-traffic service bays and the climate-controlled customer zones.

The frontal block houses a sophisticated Waiting Area and Showroom integrated with administrative offices, providing a premium environment for client interaction. The majority of the building's footprint is dedicated to a 3,143 sqft Car Review area—a large-scale open-plan workshop designed to maximize vehicle flow and technician efficiency. The facility features multiple roll-up steel doors for seamless access and utilizes a palette of durable, industrial-contemporary materials suited for heavy-duty commercial use.`,
      features: [
        'Large-Scale Operations: 4,000 sqft facility with dedicated 3,143 sqft workshop.',
        'Advanced Service Bays: Equipped for Two Port Lifts, Quad Racks, and Wheel Balancers.',
        'Premium Customer Zone: 333 sqft Waiting Area & Showroom with integrated office.',
        'Optimized Facade: Multiple roll-up steel doors for high-frequency vehicle access.',
        'Segregated Facilities: Independent restrooms for both clients and staff areas.',
        'Industrial Flow: Seamless transition between administrative and operative zones.',
        'Strategic Daylighting: Designed for maximum visibility within the technical areas.',
        'ADA Compliance: Inclusive restrooms and accessible customer service counter.'
      ],
      gallery: [
        ...Array.from({ length: 7 }, (_, i) => `/projects/express-tire-shop/0${i + 1}.jpg`),
        ...Array.from({ length: 46 }, (_, i) => `/projects/express-tire-shop/R-${(i + 1).toString().padStart(2, '0')}.png`)
      ],
      planImage: '/projects/express-tire-shop/plan.png'
    },
    'horseshoe': {
      title: 'HORSESHOE - UNIT A',
      tags: ['BIM', 'Multifamily', 'Residential'],
      location: '11866 FM 306, Canyon Lake, TX 78132',
      year: '2025',
      area: '4,144 sqft',
      mainImage: '/projects/horseshoe/EXT-01.png',
      description: `The "HORSESHOE - UNIT A" project is a premier multi-family residential development featuring contemporary 3-level townhomes. Conceived as a visionary complex of stacked housing units, the design is articulated around a central elevator core that facilitates seamless vertical circulation while maintaining structural elegance.

The architectural program is divided into distinct living experiences. Units on the first and second floors (101-102) enjoy a ground-level orientation that flows from the interior social spaces to a private outdoor oasis, complete with a pool and dedicated pool deck. The third level (Units 201-202) offers a more elevated perspective, featuring independent living quarters with specialized spaces like a picturesque "Library Nook," perfect for quiet reflection.

The project stands out for its dynamic facade, which masterfully combines white smooth stucco with Aspen White board and batten siding. Large 16"x16" stone-look accents and a Midnight Black galvanized metal roof complete the sophisticated material palette, while multiple expansive balconies create a strong connection between the inhabitants and the scenic Canyon Lake environment.`,
      features: [
        'Stacked Residential Units: Connected by a central high-efficiency elevator core.',
        'Private Pool & Deck: Dedicated outdoor amenities for ground-level units.',
        'Total Built Area: 4,144 SQFT of meticulously planned construction.',
        'Dynamic Material Palette: White smooth stucco, Aspen White board & batten, and stone accents.',
        'Safety & Isolation: 1-Hour Fire Rated Walls integrated between all units.',
        'Library Nook: A specialized creative retreat integrated into the 3rd-floor layout.',
        'Expansive Social Flow: Open-concept social areas that bleed into outdoor terraces.',
        'Luxury Master Suites: Master bedrooms with oversized en-suite bathrooms and walk-in closets.'
      ],
      gallery: [
        ...Array.from({ length: 7 }, (_, i) => `/projects/horseshoe/EXT-0${i + 1}.png`),
        ...Array.from({ length: 38 }, (_, i) => `/projects/horseshoe/INT-L12-R-${(i + 1).toString().padStart(2, '0')}.${i + 1 === 15 ? 'jpg' : 'png'}`),
        ...Array.from({ length: 32 }, (_, i) => `/projects/horseshoe/INT-L3-R-${(i + 1).toString().padStart(2, '0')}.png`),
        ...Array.from({ length: 4 }, (_, i) => `/projects/horseshoe/STAIR-Escena ${i === 0 ? '110_1' : i === 1 ? '111' : i === 2 ? '112' : '113_1'}.png`),
        '/projects/horseshoe/R-01-A.jpg',
        '/projects/horseshoe/R-01-B.jpg',
        '/projects/horseshoe/R-02-A-.jpg',
        '/projects/horseshoe/R-02-B.jpg',
        '/projects/horseshoe/R-03-A.jpg',
        '/projects/horseshoe/R-03-B.jpg'
      ],
      planImage: [
        '/projects/horseshoe/PLAN-01.png',
        '/projects/horseshoe/PLAN-02.png',
        '/projects/horseshoe/PLAN-03.png'
      ]
    },
    'harmony-reserve': {
      title: 'HARMONY RESERVE',
      tags: ['Residential', 'Master Site Plan', 'Community'],
      location: '33311 BUCKSHOT LN, MAGNOLIA, TX 77354',
      year: '2024',
      area: 'Master Site Development',
      mainImage: '/projects/harmony-reserve/BSH_00.png',
      description: `"Harmony Reserve" is a visionary master-planned residential development situated in the heart of Magnolia, TX. This project represents the pinnacle of community planning, designed to integrate a diverse selection of high-end housing typologies—including the Paris House, London House, Melbourne House, Amsterdam House, and Barcelona House—into a unified and prestigious urban environment.

The development is centered around a world-class Club House, serving as the social and recreational nucleus for all residents. With a focus on architectural harmony and pedestrian-friendly urbanism, the master plan details a sophisticated network of residential blocks, dedicated parking zones, and expansive community green spaces.

Each housing option within Harmony Reserve has been strategically positioned to maximize privacy while fostering a sense of shared luxury. From the grand dual-story townhomes to the exclusive club amenities, Harmony Reserve is defined by its meticulous attention to detail, sustainable landscaping, and a lifestyle-first approach to residential design.`,
      features: [
        'Master Site Development: Cohesive integration of multiple housing architectures.',
        'Signature Club House: A premium community amenity and social focal point.',
        'Diverse Typologies: Features Paris, London, Melbourne, Amsterdam, Barcelona, and Oakland models.',
        'Optimized Urbanism: Detailed planning of "Blocks," parking spaces, and communal flow.',
        'Expansive Green Spaces: Integration of natural areas within the residential framework.',
        'Unified Design Language: Consistent contemporary aesthetics across the entire development.',
        'Strategic Pedestrian Flow: Safe and intuitive pathways connecting residences to amenities.',
        'High-End Residential Mix: A curated blend of single and multi-level living options.'
      ],
      gallery: [
        ...Array.from({ length: 6 }, (_, i) => `/projects/harmony-reserve/BSH_${i.toString().padStart(2, '0')}.png`),
        '/projects/harmony-reserve/RCC_01.png',
        '/projects/harmony-reserve/RCC_02.png',
        '/projects/harmony-reserve/RCC_03.png',
        ...Array.from({ length: 12 }, (_, i) => `/projects/harmony-reserve/RCC_INT_${(i + 1).toString().padStart(2, '0')}.png`)
      ],
      planImage: [
        '/projects/harmony-reserve/PLANO_BSH_01.png',
        '/projects/harmony-reserve/PLANO_CASA_CLUB_01.png'
      ]
    },
    'del-pueblo-funeral-home': {
      title: 'DEL PUEBLO FUNERAL HOME',
      tags: ['Commercial', 'Institutional', 'Public Service'],
      location: '4819 WEST OREM DR, HOUSTON, TX 77045',
      year: '2024',
      area: 'Commercial / Institutional',
      mainImage: '/projects/del-pueblo-funeral-home/EXT-01.png',
      description: `"DEL PUEBLO FUNERAL HOME" is a contemporary institutional facility designed to provide a dignified and serene environment for public services. The architectural approach focuses on creating a seamless flow between operational efficiency and compassionate hospitality, ensuring comfort for visitors during sensitive times.

The facility's layout is anchored by a grand "Main Chapel" with 1,541 sqft of dedicated service space. To accommodate multiple groups simultaneously, the design features two symmetrical hospitality wings, each equipped with its own dedicated lobby and cafeteria. This dual-wing configuration provides essential privacy and spatial segregation, while a central foyer and specialized corridors facilitate intuitive pedestrian movement throughout the complex.

The building's technical design adheres to high-security and safety standards, incorporating advanced fire-resistance partition walls (up to 3 hours rated) and isolated operational zones. The exterior is defined by a prominent "Driveway Canopy," a functional architectural element that ensures protected arrival and departure for funeral services and visitors, regardless of weather conditions.`,
      features: [
        'Central Main Chapel: 1,541 sqft space designed for high-capacity dignified services.',
        'Symmetrical Hospitality Wings: Dual lobby and cafeteria zones for multi-group privacy.',
        'Dignified Arrival Experience: Integrated Driveway Canopy for protected vehicle access.',
        'High-Security Separation: 1, 2, and 3 Hour Fire Resistance Partition Walls integrated throughout.',
        'Isolated Operational Zone: Preparation and utility rooms acoustically and visually segregated.',
        'Strategic Pedestrian Flow: Central Foyer and Foyer corridors designed for intuitive navigation.',
        'Hospitality Amenities: Dedicated cafeteria spaces provided for each private wing.',
        'Contemporary Institutional Design: Modern aesthetic combined with functional religious/service requirements.'
      ],
      gallery: [
        ...Array.from({ length: 6 }, (_, i) => `/projects/del-pueblo-funeral-home/EXT-0${i + 1}.png`),
        ...Array.from({ length: 18 }, (_, i) => `/projects/del-pueblo-funeral-home/INT-${(i + 1).toString().padStart(2, '0')}.png`)
      ],
      planImage: '/projects/del-pueblo-funeral-home/PLAN-01.png'
    }
  };

  const projectData = projectsData[id || '86-kings-lake-residence'] || projectsData['86-kings-lake-residence'];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between p-8 text-black max-w-[1400px] mx-auto">
          <Link to="/" className="flex items-center gap-2 group">
            <Logo className="h-[1.5rem] w-[1.5rem]" />
            <span className="font-bold text-2xl tracking-tighter group-hover:text-gray-600 transition-colors">ARCHCOS</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <Link to="/#projects" className="hover:text-gray-600 transition-colors">Projects</Link>
            <Link to="/portfolio" className="hover:text-gray-600 transition-colors">Portfolio</Link>
            <Link to="/#services" className="hover:text-gray-600 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
          </div>
          <Link to="/contact" className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors inline-block">
            Contact Us
          </Link>
        </nav>

        {/* Main Content */}
        <main className="px-8 md:px-16 max-w-[1400px] mx-auto pb-24">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-6">
              {projectData.tags?.map((tag: string, index: number) => (
                <span key={index} className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6">
              {projectData.title}
            </motion.h1>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-8 text-sm text-gray-600 border-y border-gray-100 py-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Location</span>
                  <span className="font-medium text-black">{projectData.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Year</span>
                  <span className="font-medium text-black">{projectData.year}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="w-4 h-4 text-gray-400" />
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Area</span>
                  <span className="font-medium text-black">{projectData.area}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[50vh] md:h-[70vh] rounded-[2.5rem] overflow-hidden mb-16"
          >
            <img 
              src={projectData.mainImage} 
              alt={projectData.title} 
              className={`w-full h-full object-cover ${id === 'empire-cookies' ? 'object-bottom' : ''}`}
            />
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <h2 className="text-3xl font-semibold mb-6 tracking-tight">About the Project</h2>
              <div className="prose prose-lg text-gray-600">
                {projectData.description.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 tracking-tight">Key Features</h3>
                <ul className="space-y-4">
                  {projectData.features.map((feature: string, index: number) => (
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      key={index} 
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#8CC63F] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          
          {/* Landscape Highlight Section */}
          {projectData.landscape && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="relative h-[60vh] rounded-[2.5rem] overflow-hidden mb-12">
                <img 
                  src={projectData.landscape.coverImage} 
                  alt="Landscape Design" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-12">
                  <div className="max-w-2xl">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                      {projectData.landscape.title}
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {projectData.landscape.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Image Gallery */}
          <div className="mb-24">
            <h2 className="text-3xl font-semibold tracking-tight mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.gallery?.map((img: string, index: number) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  onClick={() => setSelectedImage(img)} 
                  className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                      <Maximize className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Architectural Plans */}
          <div className="mb-24">
            <h2 className="text-3xl font-semibold tracking-tight mb-8">Architectural Plans</h2>
            <div className="flex flex-col gap-8">
              {(Array.isArray(projectData.planImage) ? projectData.planImage : [projectData.planImage]).map((plan: string, index: number) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={index}
                  className="relative min-h-[60vh] rounded-[2.5rem] overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center p-8"
                >
                  <img 
                    src={plan} 
                    alt={`Architectural Plan ${index + 1}`} 
                    className="w-full h-full object-contain mix-blend-multiply opacity-80"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#1E293B] text-white pt-24 pb-8 px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
              <div className="md:col-span-5">
                <Link to="/" className="flex items-center gap-2 mb-8 group">
                  <Logo className="w-10 h-10" />
                  <span className="font-bold text-2xl tracking-tighter group-hover:text-white transition-colors">ARCHCOS</span>
                </Link>
                <div className="flex flex-col gap-4 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-gray-400 mt-0.5" /> 
                    <a href="mailto:adrianasarro@archcos.com" className="hover:text-white transition-colors">adrianasarro@archcos.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" /> 
                    <a href="tel:2817718684" className="hover:text-white transition-colors">281 771 8684</a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 md:col-start-7">
                <h4 className="font-semibold mb-8 text-xs tracking-[0.2em] uppercase text-gray-500">Links</h4>
                <ul className="space-y-5 text-sm text-gray-300">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div className="md:col-span-3">
                <h4 className="font-semibold mb-8 text-xs tracking-[0.2em] uppercase text-gray-500">Follow</h4>
                <div className="flex gap-5 text-gray-400">
                  <a href="#" className="hover:text-[#2563eb] transition-all duration-300"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#2563eb] transition-all duration-300"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-[#2563eb] transition-all duration-300"><Twitter className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
              © 2024 ARCHCOS. All rights reserved.
            </div>
          </div>
        </footer>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2">
                <X className="w-8 h-8" />
              </button>
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage} 
                alt="Maximized view" 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
