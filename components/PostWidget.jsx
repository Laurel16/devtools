import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 pb-12 mb-8">
      <h3 className="text-xl text-center mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className={`flex-grow ml-4 ${slug ? "text-lg" : "text-sm"}`} >
            <Link href={`/post/${post.slug}`} key={index}>{post.title}</Link>
            <p className="text-gray-500 text-xs">{moment(post.createdAt).format('DD, MMM, YYYY')}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;