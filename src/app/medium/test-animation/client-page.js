'use client'
import { delay, motion } from "framer-motion"

export default function TestAnimation() {
    
    const variants = {
        visible: { opacity: 1, scale: [1.2, 1], x: [100, 0] },
        hidden: { opacity: 0 },
      }

    return (
      <>
      <div className="">
        <div className="flex m-10 justify-around">
          <motion.div 
          className="bg-[#0A2239] w-[350px] h-[350px] rounded-md"
          animate={{ 
            x: [null, 100, 0, 0, -100, 0],
            scale: [1, 1.5, 1, 0.9, 1.5, 1]}}
          transition={{
            delay: 0.1,
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1
          }}   
          whileHover={{
            backgroundColor: '#53A2BE'
          }}
          />
          <motion.div 
          className="bg-[#0A2239] w-[350px] h-[350px] rounded-md flex flex-wrap items-center p-2">
            <motion.div className="bg-[#176087] w-[150px] h-[150px] m-2 rounded"initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 2,
            delay: 1
          }}></motion.div>
            <motion.div className="bg-[#176087] w-[150px] h-[150px] m-2 rounded"initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 2,
            delay:1.5
          }}></motion.div>
            <motion.div className="bg-[#176087] w-[150px] h-[150px] m-2 rounded"initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 2,
            delay: 2
          }}></motion.div>
            <motion.div className="bg-[#176087] w-[150px] h-[150px] m-2 rounded"initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 2,
            delay: 2.5
          }}></motion.div>
          </motion.div>
          <motion.div 
          className="bg-[#0A2239] w-[350px] h-[350px] rounded-md"/>
        </div>
      </div>
      </>
    )
}