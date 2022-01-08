import React from 'react'
import Link from 'next/link';

function PostCard({post}) {
    return (
            <div>
            <a href={`/post/${post.slug}`}>
            <div className="rounded overflow-hidden shadow-lg post-card h-full">
                <img className="w-full" src={post.image.url} alt={post.title}/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base min-h-[100]">
                {post.excerpt}
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
        </a>
    </div>
     
    )
}

export default PostCard
