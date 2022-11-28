import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../Shared/ConfirmationModal';

const AllUsers = () => {

    // const [delete, setdelete] = useState(user)
    //
    const [deletingDoctor, setDeletingDoctor] = useState()
    const closeModal = () => {
        setDeletingDoctor()
    }

    //

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://bookmart-xi.vercel.app/users')
            const data = await res.json()
            return data
        }
    })
    const handleMakeAdmin = id => {
        fetch(`https://bookmart-xi.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('made admin successful.')
                    refetch()
                }
            })
    }

    /////////////
    const handleDeletDoctor = user => {
        console.log('lol', user)
        fetch(`https://bookmart-xi.vercel.app/users/${user}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    toast(`User ${user.name} deleted successfully`)

                }
                refetch()
            })
    }
    //////////////////////

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><label onClick={() => setDeletingDoctor(user._id)} htmlFor="confirmation-modal" className='btn btn-xs btn-danger'>Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}, you cannot recover it`}
                    closeModal={closeModal}
                    successAction={handleDeletDoctor}
                    modalData={deletingDoctor}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;