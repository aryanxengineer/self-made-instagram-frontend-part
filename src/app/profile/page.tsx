import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Grid, Image, Video, Bookmark, MoveLeft, Plus, Settings, User2 } from "lucide-react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Profile = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { title: "All", Icon: Grid },
    { title: "Posts", Icon: Image },
    { title: "Reels", Icon: Video },
    { title: "Saved", Icon: Bookmark },
    { title: "Accounts", Icon: User2 }
  ];


  return (
    <div className="w-full h-full">
      <header className="p-3 px-4 flex justify-between items-center">
        <MoveLeft onClick={() => navigate(-1)} />
        <Settings onClick={() => navigate('/settings')} />
      </header>
      <main className="px-4">

        {/* prifle section */}
        <section className="pt-14 px-2 flex justify-between gap-6">
          <div>
            <Avatar className="size-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-lg">
            <h4 className="font-semibold pb-2">Aryan Yadav</h4>
            <div className="flex justify-between items-center gap-6 px-1">
              {
                [...Array(3)].map((_, index) => {
                  return <div key={index} className="text-sm">
                    <span >0</span>
                    <h5>follower</h5>
                  </div>
                })
              }
            </div>
          </div>
        </section>

        {/* bio section */}
        <section className="pt-1">
          <h2 className="py-2">username</h2>
          <div className="text-sm" style={{ whiteSpace: "pre-wrap" }}>
            {`Mahakaal bhakt
Birthday 12
Propose me`}
          </div>
        </section>
        <div className="flex justify-between items-center py-4 px-1">
          {
            [{ path: '/edit-profile', title: 'Edit Profile' }, { path: '/view-archive', title: 'View Archive' }].map(({ path, title }, index) => {
              return (
                <span key={index} className="inline-block px-10 py-2 rounded bg-gray-800 text-gray-200">
                  <Link className="text-sm font-semibold " to={path}>{title}</Link>
                </span>
              )
            })
          }
        </div>

        {/* highlight section */}
        <section>
          <h2 className="text-sm font-semibold pb-2">Highlights</h2>
          <div className="flex items-center justify-start gap-2">
            <Avatar className="size-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="size-12 border border-gray-900 flex justify-center items-center">
              <Plus size={30} color="gray" />
            </Avatar>
          </div>
        </section>

        {/* Tab sections */}
        <section className="w-full mt-4">
          {/* Tabs */}
          <div className="flex justify-between py-4">
            {tabs.map(({ title, Icon }) => (
              <div key={title} className={`flex justify-center items-center w-1/5 ${activeTab === title ? "border-b py-1" : "border-b-0 py-2"}`}>
                <button
                  onClick={() => setActiveTab(title)}
                  className="inline-block border border-gray-900"
                >
                  <Icon size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="text-center text-gray-500 py-10">
            Showing <span className="font-semibold">{activeTab}</span> posts 📸🎥
          </div>
        </section>
      </main >
    </div>

  )
};

export default Profile;