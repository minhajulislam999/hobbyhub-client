import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5001/groups/${id}`)
      .then(res => {
        setGroup(res.data);
        setLoading(false);
      })
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  }

  const isExpired = new Date(group.startDate) < new Date();

  const handleJoin = () => {
    toast.success("You have joined the group!");
  };

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={group.imageUrl} alt={group.groupName} className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold">{group.groupName}</h2>
          <p className="text-primary font-semibold">{group.category}</p>
          <p className="mt-2">{group.description}</p>
          <p className="mt-2">📍 {group.meetingLocation}</p>
          <p>👥 Max Members: {group.maxMembers}</p>
          <p>📅 Start Date: {group.startDate}</p>
          <p>👤 Created by: {group.userName}</p>

          <div className="mt-4">
            {isExpired ? (
              <p className="text-red-500 font-semibold">This group is no longer active.</p>
            ) : (
              <button onClick={handleJoin} className="btn btn-primary w-full">Join Group</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;