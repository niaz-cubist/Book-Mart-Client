import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../Shared/ConfirmationModal';
import Loading from '../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const closeModal = () => {
        setDeletingDoctor()
    }

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://bookmart-xi.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json()
                return data
            }
            catch (error) {

            }
        }
    })

    const handleDeletDoctor = doctor => {
        fetch(`https://bookmart-xi.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {

                    toast(`Doctor ${doctor.name} deleted successfully`)
                }
                refetch()
            })
    }

    const setUnsoldButton = () => {
        return
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.phone}</td>
                                <td>{doctor.price}</td>
                                <td>{doctor.speciality}</td>
                                <td>{doctor.condition}</td>
                                <td><Link to='/'><label onClick={() => { setUnsoldButton(doctor) }} className='btn btn-xs btn-primary'>Advertise</label></Link></td>

                                <td><Link to='/'><label onClick={() => { setUnsoldButton(doctor) }} className='btn btn-xs btn-primary'>Unsold</label></Link></td>

                                <td><label onClick={() => { setDeletingDoctor(doctor) }} className='btn btn-xs btn-danger' htmlFor="confirmation-modal">Delete</label></td>
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

export default ManageDoctors;