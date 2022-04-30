import { useEffect } from "react"
import { useQuizboard } from "../../context"
import { getQuizboard } from "../../services/getQuizboard"

const Quizboard:React.FC = () => {
    const {boardDispatch} = useQuizboard();
    useEffect(()=>{
        (async ()=>{
         let data = await getQuizboard();
            boardDispatch({type:"UPDATE",payload:data});
        })()
    })
    return (
        <div>
            
        </div>
    )
}

export default Quizboard
