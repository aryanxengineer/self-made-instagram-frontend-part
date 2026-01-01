import { MoveLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Activity = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full h-full text-white">
            <header className="p-3 px-4 flex justify-between items-center">
                <MoveLeft onClick={() => navigate(-1)} />
            </header>
            <div>
            </div>
        </div>
    )
}

export default Activity