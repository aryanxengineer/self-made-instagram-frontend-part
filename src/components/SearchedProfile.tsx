import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const SearchedProfile = () => {
  return (
    <Card className="flex flex-row items-center gap-3 p-2 hover:bg-muted/50 cursor-pointer">
      <Avatar className="h-8 w-8">
        <AvatarImage src="" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>

      <CardContent className="p-0">
        <p className="text-sm font-medium truncate">engineerxaryan</p>
      </CardContent>
    </Card>
  );
};

export default SearchedProfile;
