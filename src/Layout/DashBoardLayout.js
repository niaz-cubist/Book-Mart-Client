import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import useAdmin from '../Hooks/UseAdmin';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard_drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard_drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>Dashboard</Link></li>

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/users'>Users</Link></li>
                                <li><Link to='/dashboard/addBooks'>Add Books</Link></li>
                                <li><Link to='/dashboard/manageBooks'>Manage Books</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;