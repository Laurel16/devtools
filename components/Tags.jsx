import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getTags } from '../services';

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags().then((newTags) => {
      setTags(newTags);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Tags</h3>
      {tags.map((tag, index) => (
        <Link key={index} href={`/tag/${tag.slug}`}>
          <span className={`cursor-pointer text-sm block ${(index === tags.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{tag.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Tags;