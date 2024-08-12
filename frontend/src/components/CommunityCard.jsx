import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommunityCard = ({ community }) => {

  const navigate = useNavigate();

  const handleClick = () => {

    const nameSlug = encodeURIComponent( community.c_name.replace(/\s+/g, '-').toLowerCase());
    navigate(`/community/${nameSlug}`)
  }

  const truncateDescription = (description, length) => {
    if (description.length > length) {
      return description.slice(0, length) + '...';
    }
    return description;
  };

  return (
    <div className="border rounded-lg p-4 shadow-md" onClick={handleClick}>
      <h3 className="text-lg font-bold mb-2">{community.c_name || 'No Name'}</h3>
      <p className="text-sm text-gray-600">
        { truncateDescription(community.c_description || 'No Description', 57)}
      </p>
    </div>
  );
};

export default CommunityCard;