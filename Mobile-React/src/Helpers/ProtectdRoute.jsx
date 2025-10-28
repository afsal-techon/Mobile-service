import { Navigate } from "react-router-dom";



const ProtectdRoute = ({children}) => {
    const isLogin = localStorage.getItem('token') !==null;
    console.log(isLogin,'is login')
    return isLogin ? children : <Navigate to="/login" replace/>
}

export default ProtectdRoute