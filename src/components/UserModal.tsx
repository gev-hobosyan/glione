import { CircleUserRound } from "lucide-react";
import PrimaryButton from "./PrimaryButton";


const UserModal = () => {
    return (
        <div className="w-55 h-65 border border-b-white rounded-3xl mt-50">
            <div className="w-full h-25 flex flex-col border border-gray-400 rounded-3xl mb-22 justify-center items-center">
                <CircleUserRound color="#ffffff" size={36}/>
                <p className="text-white text-sm">Nare</p>
                <p className="text-gray-400 text-sm">tikin.myasnik@gmail.com</p>
            </div>

            <PrimaryButton>Log out</PrimaryButton>
        </div>
    )
}

export default UserModal;