
import Head from 'next/head'
import { Categories, Tags, PostCard, PostWidget } from '../components' 
import {getPosts} from '../services'

export default function Home({posts}) {
  posts = posts.sort((a, b) => a.position > b.position ? 1 : -1 )
 
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
            />
          </noscript>
      </Head>
      <div className ="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
              <Tags/>
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