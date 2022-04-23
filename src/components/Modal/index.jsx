import { motion } from "framer-motion";
import Backdrop from "../Backdrop/index";

//The dropIn animation props should be copied over, then tweaked.  Don't try to rebuild this from scratch
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

//This is the modal itself and all of the behaviors needed for it.
const Modal = ({ handleClose }) => {

  return (
    <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
          className="modal ashley-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )
    </Backdrop>
  );
};

//this is where the actual content of the modal will go.
const ModalText = () => (
  <div className="modal-text">
    <h3>This is where a Title Goes</h3>
    <h5>
      This is some example text that might appear inside of a modal.  It definitely looks better when it's animated, right?
    </h5>
  </div>
);

//This defines the behavior of the button
const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
