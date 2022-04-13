import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import FriendProfileSearch from "../atoms/FriendProfileSearch";
import * as A from "../atoms/_index";
import * as S from "../styles/_index";

interface IAddModal {
  props: {
    titleText: string;
    placeholderText?: string;
    btnText: string;
    onBtnClick: React.MouseEventHandler;
    showModal: boolean;
    setShowModal: Function;
  };
}

function AddModal({ props }: IAddModal) {
  const onModalToggle = () => {
    props.setShowModal((p: boolean) => !p);
  };
  const opacityVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <AnimatePresence>
      {props.showModal && (
        <>
          <Modal
            variants={opacityVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <span>{props.titleText}</span>
            {props.placeholderText && (
              <S.LabelInput>
                <S.Input placeholder={props.placeholderText} />
              </S.LabelInput>
            )}
            <A.RoundBtn
              onClick={props.onBtnClick}
              center={true}
              value={props.btnText}
            />
          </Modal>
          <S.Overlay
            variants={opacityVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onModalToggle}
          />
        </>
      )}
    </AnimatePresence>
  );
}

export default AddModal;

const Modal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  border-radius: 1em;
  background-color: ${(p) => p.theme.smoke};
  color: ${(p) => p.theme.textColor};
  width: 80%;
  @media screen and (min-width: 900px) {
    width: 40%;
  }
  height: 30vh;
  padding: 2em;
  justify-content: space-between;
  z-index: 3;
  span {
    background-color: transparent;
  }
`;