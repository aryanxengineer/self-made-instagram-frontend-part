import SearchedProfile from "@/components/SearchedProfile";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { searchProfile } from "@/features/search/searchActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

const page = () => {
  const dispatch = useAppDispatch();
  const { searchContentLoading, searchData} = useAppSelector((state) => state.search);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    dispatch(searchProfile(query));
  }, [query]);

  return (
    <div className="w-full h-full p-4 rounded-lg overflow-y-auto no-scrollbar">
      <form action="">
        <div className="flex gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search username"
            className=""
          />
        </div>
      </form>

      <div className="w-full h-full flex flex-col gap-3 py-5 overflow-x-hidden overflow-y-auto no-scrollbar">
        {
          searchContentLoading ? <Spinner /> : (
            searchData && searchData.map((profile, index) => (
              <SearchedProfile key={index} profile={profile} />
            ))
          )
        }
      </div>
    </div>
  );
};

export default page;
