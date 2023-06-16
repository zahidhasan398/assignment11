import { useEffect } from "react"

const UseTitle=title=>{
    useEffect(()=>{
        document.title=`toy car universe| ${title}`;
    },[title])
}
export default UseTitle;