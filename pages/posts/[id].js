import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return { props: { postData } };
};

const Post = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;
