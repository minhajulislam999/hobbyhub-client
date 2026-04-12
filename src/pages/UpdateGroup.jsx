import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateGroup = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/groups/${id}`)
      .then(res => setGroup(res.data))
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedGroup = {
      groupName: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      meetingLocation: form.meetingLocation.value,
      maxMembers: form.maxMembers.value,
      startDate: form.startDate.value,
      imageUrl: form.imageUrl.value,
    };

    try {
      await axios.put(`http://localhost:5001/groups/${id}`, updatedGroup);
      toast.success("Group updated successfully!");
      navigate("/myGroups");
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  if (!group) {
    return <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  }

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-base-100 shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8">Update Group</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="label">Group Name</label>
          <input type="text" name="groupName" defaultValue={group.groupName} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label">Hobby Category</label>
          <select name="category" defaultValue={group.category} className="select select-bordered w-full" required>
            <option value="">Select a category</option>
            <option>Drawing & Painting</option>
            <option>Photography</option>
            <option>Video Gaming</option>
            <option>Fishing</option>
            <option>Running</option>
            <option>Cooking</option>
            <option>Reading</option>
            <option>Writing</option>
          </select>
        </div>

        <div>
          <label className="label">Description</label>
          <textarea name="description" defaultValue={group.description} className="textarea textarea-bordered w-full" required></textarea>
        </div>

        <div>
          <label className="label">Meeting Location</label>
          <input type="text" name="meetingLocation" defaultValue={group.meetingLocation} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label">Max Members</label>
          <input type="number" name="maxMembers" defaultValue={group.maxMembers} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label">Start Date</label>
          <input type="date" name="startDate" defaultValue={group.startDate} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label">Image URL</label>
          <input type="text" name="imageUrl" defaultValue={group.imageUrl} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label">User Name</label>
          <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full " />
        </div>

        <div>
          <label className="label">User Email</label>
          <input type="text" value={user?.email} readOnly className="input input-bordered w-full " />
        </div>

        <button type="submit" className="btn btn-primary w-full">Update Group</button>
      </form>
    </div>
  );
};

export default UpdateGroup;