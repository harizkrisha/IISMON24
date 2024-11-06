import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'

import AustraliaLand from '../assets/svgs/navAssets/australia-land.svg'
import ScrollDown from '../assets/svgs/navAssets/scroll-down.svg'

import PhotoOne from '../assets/pngs/photoBuckets/photo-1.png'
import PhotoTwo from '../assets/pngs/photoBuckets/photo-2.png'
import PhotoThree from '../assets/pngs/photoBuckets/photo-3.png'
import PhotoFour from '../assets/pngs/photoBuckets/photo-4.png'
import PhotoFive from '../assets/pngs/photoBuckets/photo-5.png'
import PhotoSix from '../assets/pngs/photoBuckets/photo-6.png'

import MelbourneImg from '../assets/pngs/cities/melb-city.png'
import BrisbaneImg from '../assets/pngs/cities/bri-city.png'
import PerthImg from '../assets/pngs/cities/per-city.png'
import AdelaideImg from '../assets/pngs/cities/adl-city.png'
import CanberraImg from '../assets/pngs/cities/cbr-city.png'
import SydneyImg from '../assets/pngs/cities/syd-city.png'
const cities = [
  { name: 'Melbourne', image: MelbourneImg },
  { name: 'Brisbane', image: BrisbaneImg },
  { name: 'Perth', image: PerthImg },
  { name: 'Adelaide', image: AdelaideImg },
  { name: 'Canberra', image: CanberraImg },
  { name: 'Sydney', image: SydneyImg }
]


export default function Homepage() {
  return (
    <section className='overflow-x-hidden h-screen'>
      <motion.section className='h-screen'>
        {/* Navbar */}
        <Navbar />

        {/* HERO SECTION */}
        <motion.div className='px-12 pt-12 flex flex-col min-h-[80vh] justify-between'>
          <motion.div>
            <h1 className='font-helveticaMedium font-[550] flex gap-x-4' style={{ fontSize: 'var(--font-7xl)' }}>
              <motion.span initial={{ opacity:0, x:-25 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:.7, ease:'easeInOut' }}>Exchange</motion.span>
              <motion.span initial={{ opacity:0, x:-25 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:.9, ease:'easeInOut' }}>Beyond</motion.span>
              <motion.span initial={{ opacity:0, x:-25 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:1.1, ease:'easeInOut' }}>Borders</motion.span>
            </h1>
            <p className='font-helveticaThin font-[200] flex gap-x-4' style={{ fontSize: 'var(--font-3xl)' }}>
              <motion.span initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6, ease:'easeInOut' }}>discover australia;</motion.span>
              <motion.span initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut' }}>discover yourself!</motion.span>
            </p>
          </motion.div>
          <motion.div className='w-full flex justify-center flex-col items-center gap-y-4'>
            <motion.p initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut' }} className='font-helveticaThin font-[200]'>Scroll Down!</motion.p>
            <motion.img initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6, ease:'easeInOut' }} src={ScrollDown} className='max-w-[4rem]' alt="Scroll down"></motion.img>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ABOUT US SECTION */}
      <motion.section className='px-12 flex justify-evenly gap-10 h-[80%] my-10'>
        <motion.div className='flex flex-col flex-1 h-full justify-between'>
          <motion.div >
            <motion.h2 initial={{ opacity:0, x:-25 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:.7, ease:'easeInOut' }} className='font-helveticaMedium font-[550]' style={{ fontSize: 'var(--font-7xl)' }}>
              About Us!
            </motion.h2>
          </motion.div>
          <motion.div initial={{ opacity:0, x:-25 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:.7, ease:'easeInOut' }} className='text-justify gap-y-5 flex flex-col text-xl xl:text-2xl'>
            <p>This platform captures the transformative journeys of students who took part in exchange programs across Australia.
              Through authentic stories, practical tips, and hidden discoveries, we hope to inspire future students to take the
              leap—gaining not just academic enrichment, but new perspectives, friendships, and personal growth along the way.</p>
            <p>An exchange program in Australia is more than just world-class education. It&rsquo;s a chance to
              immerse yourself in diverse cultures, explore vibrant cities, and experience life outside your
              comfort zone.</p>
          </motion.div>
        </motion.div>

        {/* Images */}
        <motion.div className='flex-1 flex flex-row gap-2 h-full'>
          {/* Left Column */}
          <motion.div className='flex-1 flex flex-col gap-2 justify-between'>
            <motion.Card initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.7, ease:'easeInOut' }} className='h-[calc(100%*0.30)] border-0 bg-transparent shadow-none'>
              <CardContent className='p-1 h-full'>
                <img
                  src={PhotoOne}
                  className='w-full h-full object-cover rounded-md'
                  alt='Photo One'
                />
              </CardContent>
            </motion.Card>

            <motion.Card initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.7, ease:'easeInOut' }} className='h-[calc(100%*0.45)] border-0 bg-transparent shadow-none'>
              <CardContent className='p-1 h-full'>
                <img
                  src={PhotoThree}
                  className='w-full h-full object-cover rounded-md'
                  alt='Photo Three'
                />
              </CardContent>
            </motion.Card>

            <motion.Card initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.7, ease:'easeInOut' }} className='h-[calc(100%*0.25)] border-0 bg-transparent shadow-none'>
              <CardContent className='p-1 h-full'>
                <img
                  src={PhotoFive}
                  className='w-full h-full object-cover rounded-md'
                  alt='Photo Five'
                />
              </CardContent>
            </motion.Card>
          </motion.div>

          {/* Right Column */}
          <motion.div className='flex-1 flex flex-col gap-2 justify-between'>
            <motion.Card initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.9, ease:'easeInOut' }} className='h-[calc(100%*0.50)] border-0 bg-transparent shadow-none'>
              <CardContent className='p-1 h-full'>
                <img
                  src={PhotoTwo}
                  className='w-full h-full object-cover rounded-md'
                  alt='Photo Two'
                />
              </CardContent>
            </motion.Card>

            <motion.Card initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.9, ease:'easeInOut' }} className='h-[calc(100%*0.24)] border-0 bg-transparent shadow-none'>
              <CardContent className='p-1 h-full'>
                <img
                  src={PhotoFour}
                  className='w-full h-full object-cover rounded-md'
                  alt='Photo Four'
                />
              </CardContent>
            </motion.Card>

            <motion.Card initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.9, ease:'easeInOut' }} className='h-[calc(100%*0.25)] border-0 bg-transparent shadow-none'>
              <CardContent className='p-1 h-full'>
                <img
                  src={PhotoSix}
                  className='w-full h-full object-cover rounded-md'
                  alt='Photo Six'
                />
              </CardContent>
            </motion.Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CITIES CAROUSEL SECTION */}
      <motion.section className='px-12 py-10 my-20'>
        {/* Floating Title Card */}
        <motion.div className='relative z-10 flex justify-center mb-[-1rem]'>
          <div className='bg-white px-8 py-3 rounded-full shadow-lg border-2 border-black'>
            <h3 className='text-4xl font-helveticaMedium'>Discover our Cities!</h3>
          </div>
        </motion.div>

        {/* Carousel */}
        <Carousel opts={{ loop: true, align: 'center', dragFree: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {cities.map((city, index) => (
              <CarouselItem key={index} className="basis-full">
                <Link to={`/cities/${city.name.toLowerCase()}`} className="cursor-pointer block">
                  <Card className="border-0 bg-transparent shadow-none rounded-[2rem] overflow-hidden">
                    <CardContent className="p-0 relative aspect-[16/9]">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center hover:bg-black/50 transition-colors">
                        <h4 className="text-white text-7xl font-helveticaMedium">{city.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <CarouselPrevious className="h-12 w-12 rounded-full bg-white/80 hover:bg-white" />
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <CarouselNext className="h-12 w-12 rounded-full bg-white/80 hover:bg-white" />
          </div>
        </Carousel>
      </motion.section>

      {/* AWARDEE SECTION */}
      <motion.section className='px-12 py-10 my-20'>
        <Card className="border-0 bg-transparent shadow-none rounded-[2rem] overflow-hidden w-full max-w-6xl mx-auto">
          <CardContent className="p-0 relative aspect-[16/9]">
            <img
              src={PhotoOne}
              className="w-full h-full object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <h4 className="text-white text-7xl font-helveticaMedium">Awardees</h4>
            </div>
          </CardContent>
        </Card>
      </motion.section>

    </section>
  )
}

/* this is to test the autsave */