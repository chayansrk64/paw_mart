import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const PrivateRoute = ({children}) => {
     const {user, loading} = use(AuthContext)
     const location = useLocation();

     if(loading){
        return <span className="loading loading-spinner text-warning"></span>
     }

     if(user){
        return children
     }

     return <Navigate state={location.pathname} to="/login"></Navigate>


};

export default PrivateRoute;