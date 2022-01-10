import React from 'react';
import { useRouter } from 'next/router';

import { getTags, getTagPost } from '../../services';
import { PostCardByCategories, Categories, Tags, Loader } from '../../components';

const TagPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCardByCategories key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
            <Tags/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TagPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getTagPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const tags = await getTags();
  return {
    paths: tags.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}