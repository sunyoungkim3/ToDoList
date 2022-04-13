import PropTypes from "prop-types";
import styled from "./Button.module.css"

function Button({text}){
    return <Button className={styled.btn} >{text}</Button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
 
export default Button;