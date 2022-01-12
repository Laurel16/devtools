import React from 'react';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Link from 'next/link';


const PostDetail = ({ post }) => {
    const test = post.content.raw.children
    const test2 = test.children
    console.log(test)

  

const content = post.content.raw

console.log(content)

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.image.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          <RichText
            content={content}
            renderers={{
              h3: ({ children }) => <h3 className="text-xl font-semibold mb-4">{children}</h3>,
              h4: ({ children }) => <h4 className="text-md font-semibold mb-4">{children}</h4>,
              p: ({ children }) => <p className="text-md mb-4 text-justify">{children}</p>,
              a: ({ children, openInNewTab, href, rel, ...rest }) => {
                if (href.match(/^https?:\/\/|^\/\//i)) {
                  return (
                    <a
                      href={href}
                      target={openInNewTab ? '_blank' : '_self'}
                      rel={rel || 'noopener noreferrer'}
                      className='text-red-700'
                      {...rest}
                    >
                      {children}
                    </a>
                  );
                }

                return (
                  <Link href={href}>
                    <a {...rest}>{children}</a>
                  </Link>
                );
              },
            }}
          />
          <div className="px-2 pt-4 pb-2 tags-post-details">
                {post.tags.map((tag, index) => 
                 <Link 
                 key={index} 
                 href={`/tag/${tag.slug}`}>
                 {tag.name}
                </Link> 
                )}
            </div>
        </div>
      </div>

    </>
  );
};

export default PostDetail;