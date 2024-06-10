import { AnimatePresence, motion } from 'framer-motion';

const IntroAnimation = ({ activeSection }) => {
  return (
    <div className="content-wrapper center">
      <AnimatePresence>
        {activeSection === 0 && (
            <>
            <motion.div
                key="part-one"
                initial={{x: 0, opacity: 0}} // Add initial opacity 0 for fade-in effect
                animate={{x: -36, opacity: 1}} // Animate to opacity 1 for fade-in effect
                transition={{ease: "easeInOut", delay: 0.5, duration: 1}}
                exit={{opacity: 0, transition: {duration: 0.5}}}
                className="hero-heading-wrapper part-one"
            >
                <div className="part-wrapper left">
                    <motion.h1
                        className="h1-animated top"
                        initial={{opacity: 1, y: 40}}
                        animate={{opacity: 0, y: 0}}
                        transition={{ease: "easeInOut", delay: 4, duration: 0.5}}
                    >
                        Work with
                    </motion.h1>
                    <motion.h1
                        className="h1-animated bottom"
                        initial={{opacity: 0, y: 0}}
                        animate={{opacity: 1, y: -40}}
                        transition={{ease: "easeInOut", delay: 4, duration: 0.5}}
                    >
                        Become
                    </motion.h1>
                </div>
                <div className="separator-vertical"></div>
                <div className="part-wrapper right">
                    <motion.h1
                        className="h1-animated top"
                        initial={{opacity: 1, y: 40}}
                        animate={{opacity: 0, y: 0}}
                        transition={{ease: "easeInOut", delay: 2, duration: 0.5}}
                    >
                        wimers
                    </motion.h1>
                    <motion.h1
                        className="h1-animated bottom"
                        initial={{opacity: 0, y: 0}}
                        animate={{opacity: 1, y: -40}}
                        transition={{ease: "easeInOut", delay: 2, duration: 0.5}}
                    >
                        winners
                    </motion.h1>

                </div>


            </motion.div>
            <motion.div
            key="sub-text"
            className="sub-text"
            initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ease: "easeInOut", delay: 5, duration: 1}}
          exit={{opacity: 0, transition: {duration: 0.5}}}
          style={{marginTop: '-2.5rem'}}
      >
          Webflow studio. Development, design, 3d.
      </motion.div>
            </>
        )}
          {activeSection === 1 && (
          <motion.div
            key="part-three"
            className="hero-cases-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 0, duration: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="h2-style">
              Featured cases
            </div>
          </motion.div>
        )}
        {activeSection === 2 && (
          <motion.div
            key="part-two"
            className="hero-about-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 0, duration: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="sub-text">What we do</div>
            <div className="h2-style">
              Webflow development. Custom code. 3D integrations. Animations. UI/UX design. Branding.
            </div>
          </motion.div>
        )}
        {activeSection >= 3 && (
            <motion.div
                key="part-four"
                className="hero-heading-wrapper part-two"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeInOut", delay: 0, duration: 1}}
                exit={{opacity: 0, transition: {duration: 0.5}}}
            >

                <div className="h2-style">
                    Contact us
                </div>
                <a type={'email'} href={'hello@wimers.dev'} className="email-link">hello@wimers.dev</a>
            </motion.div>
        )}
      </AnimatePresence>
        {/*<AnimatePresence>
            {activeSection === 0 && (
                <motion.div
                    key="part-one"
                    initial={{ x: 0 }}
                    animate={{ x: -42 }}
                    transition={{ ease: "easeInOut", delay: 2.5, duration: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    className="hero-heading-wrapper part-one"
                >
                    <div className="part-wrapper left">
                        <motion.h1
                            className="h1-animated top"
                            initial={{ opacity: 1, y: 40 }}
                            animate={{ opacity: 0, y: 0 }}
                            transition={{ ease: "easeInOut", delay: 4, duration: 0.5 }}
                        >
                            Work with
                        </motion.h1>
                        <motion.h1
                            className="h1-animated bottom"
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: -40 }}
                            transition={{ ease: "easeInOut", delay: 4, duration: 0.5 }}
                        >
                            Become
                        </motion.h1>
                    </div>
                    <div className="separator-vertical"></div>
                    <div className="part-wrapper right">
                        <motion.h1
                            className="h1-animated top"
                            initial={{ opacity: 1, y: 40 }}
                            animate={{ opacity: 0, y: 0 }}
                            transition={{ ease: "easeInOut", delay: 2, duration: 0.5 }}
                        >
                            wimers
                        </motion.h1>
                        <motion.h1
                            className="h1-animated bottom"
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: -40 }}
                            transition={{ ease: "easeInOut", delay: 2, duration: 0.5 }}
                        >
                            winners
                        </motion.h1>
                    </div>
                </motion.div>
            )}
            {activeSection === 1 && (
                <motion.div
                    key="part-three"
                    className="hero-heading-wrapper part-two"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", delay: 0, duration: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <div className="sub-text">Portfolio</div>
                    <div className="h2-style">
                        Featured cases
                    </div>
                </motion.div>
            )}
            {activeSection === 2 && (
                <motion.div
                    key="part-two"
                    className="hero-heading-wrapper part-two"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", delay: 0, duration: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <div className="sub-text">What we do</div>
                    <div className="h2-style">
                        Webflow development. Custom code. 3D integrations. Animations. UI/UX design. Branding.
                    </div>
                </motion.div>
            )}
            {activeSection === 3 && (
                <motion.div
                    key="part-four"
                    className="hero-heading-wrapper part-two"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", delay: 0, duration: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <div className="sub-text">We are waiting</div>
                    <div className="h2-style">
                        Contact us
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      <AnimatePresence>
        {activeSection === 0 && (

        )}
      </AnimatePresence>*/}
    </div>
  );
};

export default IntroAnimation;
