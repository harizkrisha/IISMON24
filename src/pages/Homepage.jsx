import { motion } from 'framer-motion'

import AustraliaLand from '../assets/svgs/navAssets/australia-land.svg'
import ScrollDown from '../assets/svgs/navAssets/scroll-down.svg'

import PhotoOne from '../assets/pngs/photoBuckets/photo-1.png'
import PhotoTwo from '../assets/pngs/photoBuckets/photo-2.png'
import PhotoThree from '../assets/pngs/photoBuckets/photo-3.png'
import PhotoFour from '../assets/pngs/photoBuckets/photo-4.png'
import PhotoFive from '../assets/pngs/photoBuckets/photo-5.png'
import PhotoSix from '../assets/pngs/photoBuckets/photo-6.png'

export default function Homepage() {
  return (
    <section className='overflow-x-hidden h-screen'>
      <motion.section className='h-screen'>

        <motion.nav className='flex w-screen justify-between items-center py-10 px-12'>
          <motion.div>
            <motion.img src={AustraliaLand} className='w-[3rem]'></motion.img>
          </motion.div>
          <motion.div>
            <motion.ul className='flex gap-x-10 font-helveticaBlack'>
              <motion.li>
                <motion.a href="/awardees">Awardees</motion.a>
              </motion.li>
              <motion.li>
                <motion.a href="/cities">Our Cities</motion.a>
              </motion.li>
              <motion.li>
                <motion.a href="/about">About</motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.nav>

        <motion.div className='px-12 pt-12 flex flex-col min-h-[80vh] justify-between'>
          <motion.div>
            <h1 className='font-helveticaMedium font-[550]' style={{ fontSize: 'var(--font-7xl)'}}>Exchange Beyond Borders</h1>
            <p className='font-helveticaThin font-[200]' style={{ fontSize: 'var(--font-3xl)'}}>discover australia; discover yourself!</p>
          </motion.div>
          <motion.div className='w-full flex justify-center'>
            <img src={ScrollDown}></img>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className='px-12 flex justify-evenly gap-10 h-[80%] my-10'>
        {/* About Us */}
        <motion.div className='flex flex-col flex-1 h-full justify-between'>
          <motion.div>
            <h2 className='font-helveticaMedium font-[550]' style={{ fontSize: 'var(--font-6xl)'}}>About Us!</h2>
          </motion.div>
          <motion.div className='text-justify gap-y-5 flex flex-col text-xl xl:text-2xl'>
            <p>This platform captures the transformative journeys of students who took part in exchange programs across Australia. Through authentic stories, practical tips, and hidden discoveries, we hope to inspire future students to take the leap—gaining not just academic enrichment, but new perspectives, friendships, and personal growth along the way.</p>
            <p>An exchange program in Australia is more than just world-class education. It&rsquo;s a chance to immerse yourself in diverse cultures, explore vibrant cities, and experience life outside your comfort zone.</p>
          </motion.div>
        </motion.div>

        {/* Images */}
        <motion.div className='flex-1 flex flex-row gap-1 h-full'>
          <motion.div className='flex-1 flex flex-col gap-1 justify-between'>
            <div className='h-[calc(100%*0.30)]'> {/* Set a fixed height */}
              <img src={PhotoOne} className='w-full h-full object-cover' alt='Photo One' />
            </div>
            <div className='h-[calc(100%*0.45)]'>
              <img src={PhotoThree} className='w-full h-full object-cover' alt='Photo Three' />
            </div>
            <div className='h-[calc(100%*0.25)]'>
              <img src={PhotoFive} className='w-full h-full object-cover' alt='Photo Five' />
            </div>
          </motion.div>

          <motion.div className='flex-1 flex flex-col gap-1 justify-between'>
            <div className='h-[calc(100%*0.50)]'> {/* Set a fixed height */}
              <img src={PhotoTwo} className='w-full h-full object-cover' alt='Photo Two' />
            </div>
            <div className='h-[calc(100%*0.24)]'>
              <img src={PhotoFour} className='w-full h-full object-cover' alt='Photo Four' />
            </div>
            <div className='h-[calc(100%*0.25)]'>
              <img src={PhotoSix} className='w-full h-full object-cover' alt='Photo Six' />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className='flex flex-col'>
        <motion.div className='flex justify-center'>
          <h3 className='bg-white ' style={{ fontSize: 'var(--font-3xl)'}}>Discover our Cities!</h3>
        </motion.div>
      </motion.section>
    </section>
  )
}