import { UserAuth } from "@/context/AuthContext";
import { CircleUserRoundIcon } from "lucide-react";


const ProfileCard = () => {
    const { session } = UserAuth();
    return (

        <div className="w-65 h-80 border border-secondary rounded-3xl px-3 py-3 flex flex-col  relative">
            <h3 className="text-white">My Profile</h3>
            <img src="/background.jpg" className="mt-3 rounded-3xl"/>
            {session["user"]["user_metadata"] ? (
                <img
                    src={session["user"]["user_metadata"]["avatar_url"]}
                    width={"80px"}
                    className="rounded-full absolute top-35 left-1/2 -translate-x-1/2 border-4 border-dark"
                    referrerPolicy="no-referrer"
                />
            ) : (
                <CircleUserRoundIcon
                    color="#fff"
                    width={"48px"}
                />
            )}
            <p className="text-white mt-10 self-center">{session["user"]["user_metadata"]["name"]}</p>
            <p className="text-gray-500 self-center">{session["user"]["email"]}</p>
        </div>
    )
}


export default ProfileCard;