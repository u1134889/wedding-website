import Head from 'next/head';
import Image from 'next/image';
import sitting from '../public/engagement-photos/sitting-together-min.jpg';
import holding from '../public/engagement-photos/standing-holding-min.jpg';

export default function SaveTheDate() {
  return (
    <div className="container mx-auto px-2">
      <Head>
        <title>Save the Date</title>
        <meta name="description" content="Save the date for Sitjar-Rogosienski wedding 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="py-4">
          <Image
            src={sitting}
            alt="Venisse and Justin sitting together in Utah mountains"
            placeholder="blur"
          />
        </div>
        <div className="relative my-4">
          <div className="bg-gradient-to-b from-black absolute top-0 left-0 right-0">
            <h1 className="font-bold text-6xl text-center">Save The Date</h1>
            <h1 className="font-bold text-6xl text-center">Venisse and Justin</h1>
            <p className="text-lg text-center">Saturday, 4th of May 2024</p>
            <p className="text-lg text-center">Milwaukee, Wisconsin</p>
            <div className="py-20"></div>
          </div>
          <Image
            src={holding}
            alt="Venisse and Justin holding each other in Utah mountains"
            placeholder="blur"
          />
          <div className="bg-gradient-to-t from-black absolute bottom-0 left-0 right-0">
            <div className="py-20"></div>
            <p className="text-lg text-center">Invitation to follow</p>
            <p className="text-lg text-center">Please enter your contact and mailing address below</p>
            <div className="my-8 flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Centered Button
              </button>
            </div>
          </div>
        </div>
        <h1>
          Sitjar-Rogosienski Wedding 2024
        </h1>

        <h3>When</h3>
        <p>May 4th, 2024</p>

        <h3>Where</h3>
        <p><a href="https://goo.gl/maps/UbcXZnsv7RJ9Gjsc9" target="_blank" rel="noopener noreferrer">South Shore Pavilion, Milwaukee, WI</a></p>


      </main>
    </div>
  );
}