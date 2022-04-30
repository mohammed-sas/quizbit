import { ReactNode } from "react"
import { useLocation,Navigate } from "react-router-dom";
import { useAuth } from "../../context"


type Props={
    children:ReactNode
}

const RequiresAuth:any = ({children}:Props) => {
    const {user} = useAuth();
    const location = useLocation();
    return  user.email ? children : <Navigate to="/login" state={{from:location}} replace />
}

export default RequiresAuth
