import ReelCard from "@/components/ReelCard"
import { Heart, Plus } from "lucide-react"
import StoryHeader from "./components/StoryHeader"
import { useState } from "react";
import HeaderInstaPopup from "./components/popups/HeaderInstaPopup";
import { addPostStory, headerInsta } from "@/assets/data/popups";


const Home = () => {

  const [headerInstaPopup, setHeaderInstaPopup] = useState<boolean>(false);
  const [headerPlusPopup, setHeaderPlusPopup] = useState<boolean>(false);


  return (<>
    <div className="relative w-full h-screen text-white bg-black">
      <header className="fixed top-0 z-50 w-full h-10 flex justify-between bg-black items-center px-5">
        <div className="relative">
          <h3 onClick={() => setHeaderInstaPopup((prev: boolean): boolean => !prev)}>Instagram</h3>
          <div className={`${headerInstaPopup ? 'block' : 'hidden'} absolute -bottom-28 rounded-md h-24 w-40 bg-gray-800`}>

            {
              headerInsta.map(({ name, Icon }, index) => {
                return <HeaderInstaPopup key={index} name={name} Icon={<Icon />} />
              })
            }

          </div>
        </div>
        <div className="relative flex items-center gap-5">
          <span onClick={() => setHeaderPlusPopup(prev => !prev)}>
            <Plus size={24} color="white" />
          </span>
          <span>
            <Heart size={24} color="white" />
          </span>
          <div className={`${headerPlusPopup ? 'block' : 'hidden'} absolute -bottom-28 right-2 rounded-md h-24 w-40 bg-gray-800`}>

            {
              addPostStory.map(({ name, Icon }, index) => {
                return <HeaderInstaPopup key={index} name={name} Icon={<Icon />} />
              })
            }

          </div>
        </div>
      </header>

      <main onClick={() => {
        setHeaderInstaPopup(() => false);
        setHeaderPlusPopup(() => false);
      }} className="w-full pt-12">
        <StoryHeader />
        <section className="w-full min-h-screen bg-black flex flex-col gap-4">
          <ReelCard />
          <ReelCard />
        </section>
      </main>
    </div>
  </>
  )
}

export default Home