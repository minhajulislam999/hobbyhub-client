import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5001/groups?email=${user.email}`)
      .then(res => {
        setGroups(res.data);
        setLoading(false);
      })
  }, [user.email]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this group?");
    if (!confirm) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/groups/${id}`);
      toast.success("Group deleted successfully!");
      setGroups(groups.filter(group => group._id !== id));
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  }

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Groups</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Group Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group, index) => (
              <tr key={group._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={group.imageUrl} alt={group.groupName} className="w-12 h-12 rounded-full object-cover" />
                </td>
                <td>{group.groupName}</td>
                <td>{group.category}</td>
                <td>{group.meetingLocation}</td>
                <td className="flex gap-2">
                  <Link to={`/updateGroup/${group._id}`} className="btn btn-sm btn-warning">Update</Link>
                  <button onClick={() => handleDelete(group._id)} className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;