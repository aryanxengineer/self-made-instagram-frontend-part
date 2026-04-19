import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const SearchedProfile = ({ profile }: { profile: any }) => {
  return (
    <Link to={`/profile/${profile._id}`}>
      <Card className="flex flex-row items-center gap-3 p-2 hover:bg-muted/50 cursor-pointer">
        <Avatar className="h-8 w-8">
          <AvatarImage src={profile?.avatar} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        <CardContent className="p-0">
          <p className="text-sm font-medium truncate">{profile.username}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SearchedProfile;
