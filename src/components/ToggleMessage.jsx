import { useState ,useEffect } from "react";

const ToggleMessage = (props) => {
   const [togMessage, setTogMessage] = useState("Start Counting");
   const [styles, setStyles] = useState("text-primary fw-bold")
   const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        if (props.number === 0 && startCount) {
          setTogMessage("You can not reduce the number below 0");
          setStyles("text-danger fw-bold");
        } else if (props.number < 5 && props.number > 0) {
          setStartCount(true);
          setTogMessage("Keep going you are almost there.");
          setStyles("text-warning fw-bold");
        } else if (props.number >= 5) {
            setStartCount(true)
          setTogMessage("Amazing you passed the number 5");
          setStyles("text-success fw-bold");
        }
    }, [props.number]); 

    return (
        <>
            <h3 className={styles}>{togMessage}</h3>
            
        </>
    )
}
export default ToggleMessage;