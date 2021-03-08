import Link from 'next/link';

const FirstPost = () => {
  return (
    <main>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </h2>
    </main>
  );
};

export default FirstPost;
