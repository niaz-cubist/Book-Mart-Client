import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Firebase/AuthProvider';
import useAdmin from '../../Hooks/UseAdmin';

const AdminRoute = ({children}) => {

        const  {user, loading} = useContext(AuthContext)
        const [isAdmin, isAdminLoading] = useAdmin(user?.email)
        const  location = useLocation()
        console.log(isAdmin, isAdminLoading)
        if(loading || isAdminLoading){
            return <progress className="progress w-56"></progress>
        }

        if(user && isAdmin){
            return children
        }
        return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default AdminRoute;