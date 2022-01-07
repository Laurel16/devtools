
import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components' 
import {getPosts} from '../services'

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className ="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-10 col-span-1">
        <div className="p-10 grid grid-cols-1 md:grid-cols-1 lg-grid-cols-2 xl:grid-cols-3 gap-5">
        {posts.map((post, index) => (<PostCard post ={post.node} key={index} />
        ))}
        </div>
      </div>
  
      <div className="lg:col-span-2 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget/>
              <Categories/>
            </div>
      </div>

    </div>
  </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: {posts}
  }
}