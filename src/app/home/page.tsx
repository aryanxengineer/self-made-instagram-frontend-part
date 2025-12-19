import HomeStory from "@/components/modules/story/HomeStory"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Heart, Plus } from "lucide-react"


const Home = () => {
  return (
    <div className="relative w-full h-screen bg-gray-800 text-white">
      <header className="fixed top-0 z-50 w-full h-10 bg-black flex justify-between items-center px-5">
        <div>
          <h3>Instagram</h3>
        </div>
        <div className="flex items-center gap-5">
          <span>
            <Plus size={24} color="white" />
          </span>
          <span>
            <Heart size={24} color="white" />
          </span>
        </div>
      </header>


      <main className="w-full pt-12">
        <section >
          <ScrollArea className="w-full h-fit">
            <div className="flex w-max space-x-4 p-2">
              {
                [...Array(10)].map((_, index) => (
                  <div key={index} className="inline-block mx-2">
                    <HomeStory />
                  </div>
                ))
              }
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
        
        {/* All Reels are showing here randomly to user */}
        <section className="w-full h-screen bg-amber-800">
                jklsjlkdjk
        </section>

      </main>
    </div>
  )
}

export default Home