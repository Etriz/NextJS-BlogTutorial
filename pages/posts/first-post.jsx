import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Date from '../../components/date';
import { getSortedPostsData } from '../../lib/posts';

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
};

const FirstPost = ({ allPostsData }) => {
  return (
    <Layout>
      <main>
        <h1>All Posts</h1>
      </main>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default FirstPost;
