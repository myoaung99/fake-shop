import { Navigate } from "react-router";

const PrivateRoute= (props)=>{
    const isAuthenticated=true;

    if(isAuthenticated){
        return (
            props.children
        )
    }else{
        return <Navigate to='/unauthorized' replace/>
    }
}
export default PrivateRoute;