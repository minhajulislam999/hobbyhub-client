import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AllGroups = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5001/groups')
            .then(res => {

                setGroups(res.data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8">All Groups</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    groups.map(group => (
                        <div key={group._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={group.imageUrl} alt={group.groupName} className="h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{group.groupName}</h2>
                                <p className="text-sm text-gray-500">{group.category}</p>
                                <p className="text-sm">{group.description.slice(0, 80)}...</p>
                                <p className="text-sm">📍 {group.meetingLocation}</p>
                                <p className="text-sm">👥 Max Members: {group.maxMembers}</p>

                                <div className="card-actions justify-end mt-2">
                                    <Link to={`/group/${group._id}`} className="btn btn-primary btn-sm">See More</Link>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default AllGroups
