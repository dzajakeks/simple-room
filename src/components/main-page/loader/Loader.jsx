import { Fragment, useState } from 'react';
import classes from './Loader.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Loader = () => {
  const [displayNoneDice, setDisplayNoneDice] = useState(false)

  setTimeout(() => {
    setDisplayNoneDice(true)
  }, 6000);

  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate('/games');
  }

  
  return (
    <Fragment>    
      <div className={classes.loader__container}
      >
      <motion.div className={classes.dice__container}
      initial={{x: '-95vw'}}
      animate={{x: 0, rotate: 2160}}
      transition={{duration: 4}}>
        <AnimatePresence>
            <motion.div className={classes.dice}
            animate={{x: 4, scale: 500}}
            transition={{duration: 4.5, delay: 4.5}}
            exit={{opacity: 1, display: displayNoneDice}}
            >
                <div className={classes.dice__dot1}></div>
                <div className={classes.dice__dot2}></div>
                <div className={classes.dice__dot3}></div>
                <div className={classes.dice__dot4}></div>
                <div className={classes.dice__dot5}></div>
            </motion.div>
          </AnimatePresence>
      </motion.div>   
      </div>
      <motion.button
      initial={{display: 'none', opacity: 0}}
      animate={{display: 'inline-block', opacity: 1}}
      transition={{delay: 8, duration: 2}}
      onClick={navigateToMain}
      className={classes.button__next__page}>press me</motion.button>
    </Fragment>
  )
}

export default Loader;