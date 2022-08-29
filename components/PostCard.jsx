import React from 'react'
import Link from 'next/link';

function PostCard({post}) {

    return (
            <div>
            <a href={`/post/${post.slug}`}>
            <div className="rounded overflow-hidden shadow-lg post-card h-full mt-10">
                <img className="w-full" src={post.image.url} alt={post.title}/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base min-h-[100]">
                {post.excerpt}
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                {post.tags.map(tag => 
                <span className="inline-block rounded-full px-2 py-1 text-sm text-gray-700  mb-2">
                    {tag.name}
                </span>)}
            </div>
        </div>
        </a>
    </div>
     
    )
}

export default PostCard
