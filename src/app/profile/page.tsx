import { useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { myProfile } from "@/features/profiles/profileActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

const Page = () => {
  const dispatch = useAppDispatch();
  const { isLoading, profileData } = useAppSelector((state) => state.profile);

  // 🚀 Fetch logic (clean + deterministic)
  useEffect(() => {
    dispatch(myProfile());
    toast.success("Your profile fetched successfully");
  }, []);

  // 🔄 Loading state
  if (isLoading) return <Spinner />;

  // ❗ Defensive check
  if (!profileData) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-muted-foreground">
        Profile not found
      </div>
    );
  }

  // 📊 Derived Stats (no hardcoding)
  const stats = [
    { label: "Posts", value: profileData.postCounts },
    { label: "Followers", value: profileData.followersCount },
    { label: "Following", value: profileData.followingCount },
  ];

  return (
    <div className="w-full min-h-screen p-3 sm:p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* ================= PROFILE HEADER ================= */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* AVATAR */}
            <Avatar className="w-24 h-24 md:w-28 md:h-28">
              <AvatarImage src={profileData.avatar || ""} />
              <AvatarFallback>
                {profileData.username?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            {/* INFO */}
            <div className="flex-1 text-center md:text-left space-y-3">
              {/* NAME + ACTION */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {profileData.username}
                </h2>

                <div className="flex gap-2 justify-center md:justify-start">
                  {<Button size="sm">Edit Profile</Button>}
                  <Button size="sm" variant="outline">
                    Share
                  </Button>
                </div>
              </div>

              {/* STATS */}
              <div className="flex justify-around md:justify-start md:gap-6 text-sm">
                {stats.map((item) => (
                  <div key={item.label}>
                    <p className="font-semibold">{item.value}</p>
                    <p className="text-muted-foreground text-xs">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* BIO */}
              <div className="text-sm">
                <p className="font-medium text-black">
                  {profileData.fullname || "—"}
                </p>
                <p className="text-muted-foreground">
                  {profileData.bio || "No bio available"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ================= POSTS GRID ================= */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Array.from({ length: profileData.postCounts || 0 }).map(
            (_, index) => (
              <Card
                key={index}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition"
              >
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-muted-foreground">
                  Post {index + 1}
                </div>
              </Card>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
