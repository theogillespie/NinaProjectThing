
import { Theo, Nina } from "@/lib/static"
import Image from "next/image";
import { useState } from "react"

export default function Start() {


    const[profile, setProfile] = useState(Theo);


    const switchProfile = () => {
        if(profile.name === Theo.name) {
            setProfile(Nina);
        } else {
            setProfile(Theo);
        }
    }

    return <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-800">
        <div className="w-1/3 h-3/4 bg-gray-700 bg-opacity-50 rounded-lg flex flex-col items-center justify-center text-slate-200">
            <h1 className="text-xl">Welcome,</h1>
            <h1 className="text-4xl">{profile.name}</h1>

            <Image src={profile.image} width={500} height={500} className="h-fit w-1/2 rounded-full border-4 border-gray-500"></Image>

            <button>Go</button>

            <button onClick={switchProfile}>This Isn't Me</button>
        </div>
    </div>
}