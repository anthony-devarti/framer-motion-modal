import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./components/Modal";


function App() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);


  return (
    <>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={open}
        >
          Launch modal
        </motion.button>
      

      <ModalContainer>
        {modalOpen && (
          <Modal modalOpen={modalOpen} type={'dropIn'} handleClose={close} />
        )}
      </ModalContainer>
    </>
  );
}

const ModalContainer = ({ children }) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
  >
    {children}
  </AnimatePresence>
);

export default App;
