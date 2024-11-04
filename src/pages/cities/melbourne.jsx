import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card, CardContent } from "../../components/ui/card"
import AustraliaLand from '../../assets/svgs/navAssets/australia-land.svg'
import MelbourneSkyline from '../../assets/pngs/cities/melb-city.png'
import Placeholder from '../../assets/pngs/photoBuckets/photo-2.png'

export default function Melbourne() {
  return (
    <section>
      <motion.div className="min-h-screen">
        {/* Hero Section with Navigation */}
        <motion.div className="relative h-screen">
          {/* Background Image */}
          <motion.img
            src={MelbourneSkyline}
            className="w-full h-full object-cover absolute inset-0"
            alt="Melbourne Skyline"
          />
          <motion.div className="absolute inset-0 bg-black/50">
            {/* Navigation */}
            <motion.nav className='relative z-10 flex justify-between items-center py-10 px-12'>
              <motion.div>
                <motion.img src={AustraliaLand} className='w-[3rem]' alt="Australia Logo" />
              </motion.div>
              <motion.div>
                <motion.ul className='flex gap-x-10 font-helveticaBlack text-white'>
                  <motion.li>
                    <Link to="/awardees">Awardees</Link>
                  </motion.li>
                  <motion.li>
                    <Link to="/cities">Our Cities</Link>
                  </motion.li>
                  <motion.li>
                    <Link to="/about">About</Link>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.nav>

            {/* Hero Text */}
            <motion.div className="absolute inset-0 flex items-center justify-center">
              <motion.h1 className="text-white text-8xl font-helveticaMedium">Melbourne</motion.h1>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* The Cultural Capital Section */}
      <motion.section className="px-12 flex gap-x-10 min-h-screen">
        {/* Left Column - Text Content */}
        <motion.div className="w-1/2 flex flex-col justify-between py-20">
          <motion.h2 className="font-helveticaMedium font-[550] text-7xl">
            THE<br />CULTURAL<br />CAPITAL.
          </motion.h2>
          <motion.p className="text-justify text-xl xl:text-2xl max-w-2xl">
            Melbourne is Australia's heartbeat of creativity and culture. Known for its
            laneways, art, and endless café culture, this city is where inspiration flows freely. From
            vibrant street art to charming markets and iconic sports arenas, Melbourne is a place
            that feels both familiar and thrillingly new.
          </motion.p>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div className="w-1/2 py-20">
        <Card className="border-0 bg-transparent shadow-none rounded-[2rem] overflow-hidden">
          <CardContent className="p-0 relative aspect-[4/5]">
            <motion.img
              src={Placeholder}
              alt="Cultural Melbourne"
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>
      </motion.div>
      </motion.section>

    </section>
  )
}