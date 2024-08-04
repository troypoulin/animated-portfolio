import { useState } from "react"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/toggleButton"
import { delay, motion, transform } from "framer-motion"

function Sidebar() {
  const [open, setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 15,
        damping: 5
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 18,
        damping: 6
      }

    }
  }
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} isOpen={open}/>
    </motion.div>
  )
}

export default Sidebar