import axios from 'axios';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const CreateGroup = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleCreateGroup = async (e) => {
        e.preventDefault();

        const form = e.target;

        const group = {
            groupName: form.groupName.value,
            category: form.category.value,
            description: form.description.value,
            meetingLocation: form.meetingLocation.value,
            maxMembers: form.maxMembers.value,
            startDate: form.startDate.value,
            imageUrl: form.imageUrl.value,
            creatorName: user?.displayName,
            creatorEmail: user?.email
        }

        try {
            //send group data to backend
            await axios.post('http://localhost:5001/groups', group);
            toast.success("Group created successfully!");
            navigate('/groups');

        }
        catch(err){
            toast.error("Failed to create group! Please try again.");
        }

        }

    
    return (
        <div className="max-w-2xl mx-auto my-10 p-8 bg-base-100 shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Create a New Group</h2>
            <form onSubmit={handleCreateGroup} className="space-y-6">

                <div>
                    <label className="label">Group Name</label>
                    <input type="text" name='groupName' className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="label">Hobby Category</label>
                    <select name='category' className="select select-bordered w-full" required>
                        <option value="">Select a category</option>
                        <option value="sports">Drawing & Painting</option>
                        <option >Photography</option>
                        <option>Video Gaming</option>
                        <option>Fishing</option>
                        <option value="">Running</option>
                        <option>Cooking</option>
                        <option>Reading</option>
                        <option>Writing</option>
                    </select>
                </div>

                <div>
                    <label className="label">Description</label>
                    <textarea name='description' className="textarea textarea-bordered w-full" rows="4" required></textarea>
                </div>

                <div>
                    <label className="label">Meeting Location</label>
                    <input type="text" name='meetingLocation' className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Max Members</label>
                    <input type="number" name='maxMembers' className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Start Date</label>
                    <input type="date" name='startDate' className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Image Url</label>
                    <input type="text" name='imageUrl' className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">User Name</label>
                    <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">User Email</label>
                    <input type="email" value={user?.email} readOnly className="input input-bordered w-full" />
                </div>

                <button type="submit" className="btn btn-primary w-full">Create Group</button>

            </form >


        </div >
    )
}

export default CreateGroup
