import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";

const FeaturedGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/groups')
      .then(res => setGroups(res.data.slice(0, 6)))
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Groups</h2>
             <Fade cascade damping={0.1}>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(group => (
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
          
        ))}
      </div>
      </Fade>
    </div>
  );
};

export default FeaturedGroups;