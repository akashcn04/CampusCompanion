import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { TbAutomaticGearbox } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';


export default function UserCard({ id }) {
  const [tutor, setTutor] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        const response = await fetch('/api/user/info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "id" : id
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch tutor data: ${response.statusText}`);
        }

        const data = await response.json();
        setTutor(data);
      } catch (error) {
        console.error('Error fetching tutor data:', error);
      }
    };

    fetchTutorData();
  }, [id]);

  const handleCardclick = () => {
    navigate(`/tutors/${tutor._id}`)
  }

  return (
    <div className="bg-white w-[60vw] min-h-[12vh] rounded-lg flex items-center gap-5">
      <div className="ml-5">
        <CgProfile className="text-6xl" />
      </div>

      <div className="flex flex-col ml-5">
        <p className="font-semibold">{tutor?.username || 'Loading...'} </p>
        <div className="flex gap-1 items-center">
          <p className="text-green-500" onClick={handleCardclick}>About</p>
          <FaExternalLinkSquareAlt />
        </div>
      </div>
    </div>
  );
}