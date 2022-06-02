import type { NextPage } from 'next';
import { Button } from '../components/Button';

const Home: NextPage = () => {

  return (
    <>
      <div>
          <div className="flex flex-col items-center pt-12">
            <h1 className="text-3xl">Welcome to the</h1>
            <p className="text-8xl pt-3 text-red-600 font-bold ">DEV</p>
            <p className="text-8xl pt-3 text-red-600 font-bold">COMMUNITY</p>
            <p className="w-80 ml-8 mt-3">The best site for connect with more developers</p> 
          </div>
            <div className="flex justify-center p-8">
              <div className="flex justify-evenly w-80">
                <Button className="flex item-center justify-center px-4 w-auto bg-red-600 h-7 rounded-3xl active:border-2 hover:bg-red-500 text-white">
                    Enter
                </Button>
                <Button className="flex item-center justify-center px-4 w-auto bg-red-600 h-7 rounded-3xl active:border-2 hover:bg-red-500 text-white">
                    Why us?
                </Button>
              </div>
            </div>
            

      </div>
    </>
  )
}

export default Home;
