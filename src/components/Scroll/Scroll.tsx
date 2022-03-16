import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { ExpandLess } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(()=>({
    toTop:{
        zIndex:10,
        position: "fixed",
        bottom:'2vh',
        backgroundColor: '#DCDCDC',
        color:'black',
        fontSize:'20px',
        "&:hover, &.Mui-focusVisible":{
            transition: '0.3s',
            color: '#397BA6',
            backgroundColor: '#DCDCDC'
        },
        right: '5%'
    }
}))
const Scroll = ({ showBelow }: any) => {
    const classes = useStyles()
    const [show, setShow] = useState(showBelow ? false : true)
    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        }
        else {
            if (show) setShow(false)
        }
    }
    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })
    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }
    return (
        <div>
            {
                show &&
                <IconButton onClick={handleClick} className={classes.toTop}>
                    <ExpandLess />
                </IconButton>
            }
        </div>
    )
}

export default Scroll
