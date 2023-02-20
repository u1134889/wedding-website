import Head from 'next/head';
import Image from 'next/image';
import { DownArrow } from '../components/DownArrow';
import sitting from '../public/engagement-photos/sitting-together-min.jpg';
import holding from '../public/engagement-photos/standing-holding-min.jpg';

export default function SaveTheDate() {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Save the Date</title>
        <meta name="description" content="Save the date for Sitjar-Rogosienski wedding 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen flex items-center relative overflow-hidden">
          <Image
            src={sitting}
            alt="Venisse and Justin sitting together in Utah mountains"
            placeholder="blur"
            className="object-cover min-h-full min-w-full"
          />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-gradient-to-t from-[rgba(0,0,0,0.75)] py-40"></div>
            <div className="py-8 bg-[rgba(0,0,0,0.75)]">
            <a href="#text-image" className="text-white text-6xl">
              <DownArrow className="mx-auto h-10 w-10"/>
            </a>
            </div>
          </div>
        </div>
        <div id="text-image" className="relative my-4 container mx-auto">
          <div className="xl:absolute xl:top-0 xl:left-0 xl:right-0">
            <div className="xl:bg-[rgba(0,0,0,0.75)]">
              <h1 className="font-bold text-6xl text-center">Save The Date</h1>
              <h1 className="font-bold text-6xl text-center">Venisse and Justin</h1>
              <p className="text-lg text-center">Saturday, 4th of May 2024</p>
              <p className="text-lg text-center">Milwaukee, Wisconsin</p>
            </div>
            <div className="py-4 xl:py-32 xl:bg-gradient-to-b xl:from-[rgba(0,0,0,0.75)]"></div>
          </div>
          <Image
            src={holding}
            alt="Venisse and Justin holding each other in Utah mountains"
            placeholder="blur"
          />
          <div className="xl:absolute xl:bottom-0 xl:left-0 xl:right-0">
            <div className="py-4 xl:py-32 xl:bg-gradient-to-t xl:from-[rgba(0,0,0,0.75)]"></div>
            <div className="xl:bg-[rgba(0,0,0,0.75)]">
              <p className="text-lg text-center">Invitation to follow</p>
              <p className="text-lg text-center">Please enter your contact and mailing address below</p>
              <div className="py-8 flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Centered Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}