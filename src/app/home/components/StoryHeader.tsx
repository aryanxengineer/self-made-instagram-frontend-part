
import HomeStory from '@/components/modules/story/HomeStory'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const StoryHeader = () => {
    return (
        <section >
            <ScrollArea className="w-full h-fit">
                <div className="flex w-max space-x-4 px-4">
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
    )
}

export default StoryHeader