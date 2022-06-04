import type { NextPage } from 'next';
import { Button } from '../components/Button';

const Home: NextPage = () => {

  return (
    <>
      <section>
        <div className="flex flex-col items-center pt-12">
          <h1 className="text-3xl">Welcome to the</h1>
          <p className="text-8xl pt-3 text-red-600 font-bold">DEV</p>
          <p className="text-8xl pt-3 text-red-600 font-bold">COMMUNITY</p>
          <p className="w-80 ml-8 mt-3">The best site for connecting with more developers</p>
        </div>

        <div className="flex justify-center p-8">
          <Button>
            Enter
          </Button>
          <Button>
            Why us?
          </Button>
        </div>

      </section>
    </>
  )
}

export default Home;
