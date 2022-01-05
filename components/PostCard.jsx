import React from 'react'

function PostCard({post}) {
    return (
        <div>
            <div>{post.title}</div>
            <div>  {post.excerpt}</div>
        </div>
    )
}

export default PostCard
