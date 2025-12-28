import { settingOptionsData } from "@/assets/data/settingOptions";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IdCardIcon, MoveLeft, User, Verified } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const Setting = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full h-full">
            <header className="p-3 px-4 flex justify-between items-center">
                <MoveLeft onClick={() => navigate(-1)} />
            </header>
            <div className="p-5">
                <section>
                    <Card className="bg-gray-900 rounded-xl px-5">
                        <CardHeader className="py-2 px-0">
                            <CardTitle className="mb-2 text-blue-500">Meta</CardTitle>
                            <CardTitle>Accounts Centre</CardTitle>
                        </CardHeader>
                        <CardDescription className="text-gray-300 text-xs">
                            <p className="mb-4">Manage your connected experiences and account settings accross Meta technologies</p>
                            <ul className="flex flex-col gap-2">
                                <li className="flex gap-2.5 font-semibold">
                                    <span><User size={20} /></span>
                                    <span>Personal Details</span>
                                </li>
                                <li className="flex gap-2.5 font-semibold">
                                    <span><Verified size={20} /></span>
                                    <span>Password and security</span>
                                </li>
                                <li className="flex gap-2.5 font-semibold">
                                    <span><IdCardIcon size={20} /></span>
                                    <span>Ad Preferences</span>
                                </li>
                            </ul>
                        </CardDescription>
                        <CardFooter>
                            <p className="text-blue-600 text-xs mt-2">See more in Account Centre</p>
                        </CardFooter>
                    </Card>
                </section>
                <div className="p-5 mb-10">
                    <div>
                        {
                            settingOptionsData.map(({ title, options }, index) => {
                                return <div key={index + title}>
                                    <h4 className="text-xs text-gray-300 font-semibold my-4">{title}</h4>
                                    <ul className="flex flex-col gap-3">
                                        {
                                            options.map(({ name, path, Icon }, index) => (
                                                <Link key={name + index} to={path}>
                                                    <li className="flex gap-3 text-sm my-1">
                                                        <span><Icon size={20} /></span>
                                                        <span>{name}</span>
                                                    </li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                    <div className="mt-5">
                        <Link to={'/login'} className="text-md font-semibold text-red-600">
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting