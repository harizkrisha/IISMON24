import { motion } from 'framer-motion'
import AustraliaLand from '../assets/svgs/navAssets/australia-land.svg'

export default function Navbar() {
  return (
    <motion.nav className='flex w-screen justify-between items-center py-10 px-12 z-50'>
          <motion.div
            initial={{ opacity:0, x:-25 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:.5, ease:"easeInOut" }}
            >
            <a href="/" className='hover:cursor'><motion.img src={AustraliaLand} className='w-[3rem]'></motion.img></a>
          </motion.div>
          <motion.div>
            <motion.ul className='flex gap-x-10 font-helveticaBlack'>
              <motion.li
                initial={{ opacity:0, x:25 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:.5, ease:"easeInOut" }}>
                <motion.a href="/">Awardees</motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity:0, x:25 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:.7, ease:"easeInOut" }}>
                <motion.a href="/">Our Cities</motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity:0, x:25 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:.9, ease:"easeInOut" }}>
                <motion.a href="/#AboutUs">About</motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.nav>
  )
}