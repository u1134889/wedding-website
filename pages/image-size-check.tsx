import Head from 'next/head';
import Image from 'next/image';
import sitting from '../public/engagement-photos/sitting-together-min.jpg';
import holding from '../public/engagement-photos/standing-holding-min.jpg';

export default function ImageSizeTest() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Image Size Test</title>
        <meta name="description" content="Image size test for Sitjar-Rogosienski wedding 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={sitting}
        alt="Venisse and Justin sitting together in Utah mountains"
        placeholder="blur"
      />
      <Image
        src={holding}
        alt="Venisse and Justin holding each other in Utah mountains"
        placeholder="blur"
      />
    </div>
  );
}