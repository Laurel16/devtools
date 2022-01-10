import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-2 p-12 relative rounded-lg bg-opacity-20">
 
    <div className="absolute left-0 right-0 -top-8">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="60px"
        width="60px"
        className="align-middle rounded-full"
        src={author.photo.url}
         /> 
    </div>
    <h3 className=" text-xl font-bold">{author.name}</h3>
    <p className="text-ls">{author.bio}</p>
  </div>
  
);

export default Author;

