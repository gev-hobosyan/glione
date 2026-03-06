import { Flame } from "lucide-react"
import { Worm } from "lucide-react"
import { CircleUserRound } from "lucide-react"
import { Gem } from "lucide-react"


const NavbarMain = () => {
    return (
        <div className="flex justify-between border border-white/40 rounded-2xl py-2.5 px-3 fixed top-2 left-2 right-2 bg-black/20 backdrop-blur-3xl">
            <img  src="logo.svg" />
           
            <div className="flex  gap-5 justify-center items-center">
                <div className="flex gap-1">
                    <p className="text-white">71</p>
                    <Flame color="#f8861b" />
                 </div>

                 <div className="flex gap-1">
                     <p className="text-white">18</p>
                     <Worm color="#1fb814" />
                </div>

                <div className="flex gap-1">
                    <p className="text-white">65</p>
                    <Gem color="#16e6e9" />
                </div>

                <CircleUserRound  color="#ffffff" size={36} />
            </div>
        </div>
    )
}

export default NavbarMain; 