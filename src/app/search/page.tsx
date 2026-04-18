import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const page = () => {

    const dispatch = useAppDispatch();
    const {} = useAppSelector(state => state.search);

    const searchHandler = () => {
        const timer = setTimeout(() => {
            dispatch();
        }, 1000);

        return () => timer.clearTimeout()
    }


  return (
    <div className="w-full h-full p-4 rounded-lg overflow-y-auto no-scrollbar">
      <form action="">
        <div className="flex gap-2">
          <Input onChange={() => searchHandler()} type="text" placeholder="Search username" className="" />
        </div>
      </form>

      <div className="w-full h-full flex flex-col gap-3 py-5 overflow-x-hidden overflow-y-auto no-scrollbar">

      </div>
    </div>
  );
};

export default page;
