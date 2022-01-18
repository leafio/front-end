import { getAllPostIds, getPostData } from "../../lib/posts"
import Layout from "../../components/layout"
import Date from "../../components/date"
import Head from "next/head"

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  console.log(postData)
  return {
    props: {
      postData,
    },
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="mx-0 my-4 text-4xl font-bold tracking-tighter">
          {postData.title}
        </h1>
        <div className="text-gray-500">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
