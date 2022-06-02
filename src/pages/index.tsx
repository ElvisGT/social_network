import type { NextPage } from 'next';
import { Button } from '../components/Button';

const Home: NextPage = () => {

  return (
    <>
      <div>
          <div className="flex flex-col items-center pt-12">
            <h1 className="text-3xl">Welcome to the</h1>
            <p className="text-8xl pt-3 text-red-600">FUTURE</p>
            <p className="w-80 ml-8 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident voluptatum quaerat quisquam nulla quae tenetur? Consectetur sit totam vero veritatis blanditiis ex ipsam quae, ut corporis optio necessitatibus. Dolorem.</p> 
          </div>
            <div className="flex justify-center p-8">
              <div className="flex justify-evenly w-80">
                <Button>
                    Click for more!
                </Button>
                <Button>
                    Why us?
                </Button>
              </div>
            </div>
            

      </div>
    </>
  )
}

export default Home;
