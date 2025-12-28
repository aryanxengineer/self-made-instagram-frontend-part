import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const HomeStory = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar className="size-20">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-[9px]">username</span>
    </div>
  )
}

export default HomeStory