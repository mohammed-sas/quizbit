import style from './quizboard.module.css';
import { useEffect } from "react"
import { useQuizboard } from "../../context"
import { getQuizboard } from "../../services/getQuizboard"
const Quizboard:React.FC = () => {
    const {boardState,boardDispatch} = useQuizboard();
    useEffect(()=>{
        (async ()=>{
         let data = await getQuizboard();
            boardDispatch({type:"UPDATE",payload:data});
        })()
    })
    return (
        <div className={style["container"]}>
            <h1 className="centered-text font-color">Quizboard</h1>
            <table className={`${style["table"]} white`}>
                <tr >
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Score</th>
                </tr>
                {
                    boardState.users.map((user,index)=>{
                        return <tr key={user.email}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.score}</td>
                        </tr>
                    })
                }
            </table>
            
        </div>
    )
}

export default Quizboard
