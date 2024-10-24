import { Close } from "Shared/Assets/Icons";
import Button from "Shared/Components/Inputs/Button";
import { useAlert } from "Shared/Contexts";
import { centralPageTransition } from "Shared/Utils/Data/Animations";
import { AnimatePresence, motion } from "framer-motion";

const Alert = ({ close }: { close: VoidFunction }) => {
  const { customAlert, setCustomAlert } = useAlert();

  return (
    <AnimatePresence>
      {customAlert && (
        <motion.div
          variants={centralPageTransition}
          initial="hidden"
          exit="exit"
          animate="visible"
          className="Content_Block AlertConfirm_Float_Page Central_Float_Page"
        >
          <div className="Content_Header Aling_Center Justify_Between">
            <b>{customAlert.label}</b>
            <span className="Float_Page_Close" onClick={close}>
              <Close />
            </span>
          </div>
          <div className="Content_Container">
            <div className="Flex_Row">
              <span>{customAlert.content}</span>
            </div>
            <div className="Justify_End g-4">

              {
                (customAlert.cancelOpt == false)
                  ? null :
                  <Button type="More" onClick={close}>
                    {customAlert.cancelLabel || "Cancelar"}
                  </Button>
              }
              {
                (customAlert.confirmOpt == false)
                  ? null :
                  <Button
                    type="Save"
                    onClick={() => {
                      close();
                      customAlert.confirmAction && customAlert.confirmAction();
                    }}
                  >
                    {customAlert.confirmLabel || "Confirmar"}
                  </Button>
              }

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
