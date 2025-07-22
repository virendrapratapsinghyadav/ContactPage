import React from 'react'
import styles from "./Button.module.css"
import { MdMessage } from "react-icons/md";
 import { IoIosMail } from "react-icons/io";

const Button = ({text, icon, isOutline}) => {
  return (
    <button className={isOutline?styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
