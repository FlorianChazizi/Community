import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartIcon } from './Icons';

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

<div className="bg-muted p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg flex flex-col justify-between h-full" onClick={handleClick}>
  <div>
    <h4 className="text-lg font-bold">{community.c_name || 'No Name'}</h4>
    <p className="text-muted-foreground">
      {truncateDescription(community.c_description || 'No Description', 57)}
    </p>
  </div>
  <div className="flex justify-between items-center mt-2">
    <div className="flex items-center gap-2">
      <span className="text-sm">By: {community.c_creator_id.username || 'Unknown'}</span>
    </div>
    <HeartIcon className="w-4 h-4" />
  </div>
</div>

  );
};



export default CommunityCard;