import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card, CardContent } from "../../components/ui/card"
import AustraliaLand from '../../assets/svgs/navAssets/australia-land.svg'
import MelbourneSkyline from '../../assets/pngs/cities/melb-city.png'
import Placeholder from '../../assets/pngs/photoBuckets/photo-2.png'
import Navbar from '../../components/navbar'

export default function Melbourne() {
  return (
    <section>
      <motion.div className="min-h-screen">
        {/* Hero Section with Navigation */}
        <motion.div className="h-screen" style={{ backgroundImage:`url(${MelbourneSkyline})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
          <Navbar />
          <motion.div className="flex items-center justify-center h-[calc(100%*.75)]">
            <motion.h1 className="text-white text-8xl font-helveticaMedium">Melbourne</motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* The Cultural Capital Section */}
      <motion.section className="px-12 flex gap-x-10 h-screen">
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
        <motion.div className="w-1/2 flex items-center">
          <Card className="border-0 bg-transparent shadow-none rounded-[2rem] overflow-hidden h-[calc(100vh-10rem)] w-full">
            <CardContent className="p-0 relative w-full h-full">
              <motion.img
                src={Placeholder}
                alt="Cultural Melbourne"
                className="w-full h-full object-cover"
                style={{ height: '100%', width: '100%' }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

    </section>
  )
}