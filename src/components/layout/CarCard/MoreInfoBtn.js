import React, { useState } from 'react'
import Modal from '../Modal/Modal'
// import { AiOutlineEye } from "react-icons/ai";

import classes from './MoreInfoBtn.module.css'

const MoreInfoBtn = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    function toggleModal() {
      setIsModalVisible(!isModalVisible)
    }

  return (
    <>
      <button className={classes.moreInfoBtn} onClick={toggleModal}>
          {/* <AiOutlineEye className={classes.eyeIcon}/> */}
          Ver
      </button>
      <Modal isVisible={isModalVisible} onClose={toggleModal} carDetails={props.carDetails}/>
    </>
  )
}

export default MoreInfoBtn