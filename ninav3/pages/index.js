import { useEffect, useState } from "react"
import { HexColorPicker } from "react-colorful";

import { IoIosPaperPlane } from "react-icons/io";
import {FaPlay} from "react-icons/fa"
import {BsFillSkipEndFill, BsFillSkipStartFill} from "react-icons/bs"

import Image from "next/image";

import io from "socket.io-client"
let socket;

export default function Home() {

  const [color, setColor] = useState("#aabbcc");

  const[connected, setConnected] = useState(false);

  useEffect(() =>{socketInitializer()},[]);

  const socketInitializer = async () => {
    await fetch('/api/socket');

    socket = io(undefined, {
      path: "/api/socketio"
    });

    socket.on('connect', () => {
      setConnected(true);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    })
  }


  return <div style={{
    background: `linear-gradient(45deg,${color},#21b011)`,
    height: "100vh",
    backgroundSize: "300% 300%",
    animation: "gradient-animation 10s linear infinite"
  }}>
    <div className="w-full h-full flex flex-col space-y-2 items-center justify-center">

        <div className="w-1/2 h-1/2 bg-gray-800 bg-opacity-50 rounded-lg">

          {/*
            <div className="float-right mt-1 mr-1">

              {connected ? <><div className="absolute w-4 h-4 bg-green-500 animate-ping rounded-full"></div>
              <div className="relative w-4 h-4 bg-green-500 rounded-full"></div></> : <div className="bg-gray-500 w-4 h-4 rounded-full"></div>}

            </div>
            */ }

            <div className="w-full h-full flex flex-row items-center justify-center">
                <div className="w-1/2 h-full flex flex-col items-center justify-center space-y-2">
                    <div className="w-3/4 h-3/4 bg-gray-800 rounded-lg">
                      Image
                    </div>

                    <div className="w-3/4 h-1/6 bg-gray-800 bg-opacity-60 rounded-full flex flex-row space-x-10 justify-evenly items-center text-white text-4xl">
                    <BsFillSkipStartFill></BsFillSkipStartFill>
                      <FaPlay></FaPlay>
                      <BsFillSkipEndFill></BsFillSkipEndFill>
                    </div>
                </div>
                <div className="w-1/2 h-full bg-red-400">

                </div>
            </div>
        </div>

        <div className="w-1/2 h-1/3 flex flex-row space-x-2">

            <div className="w-1/3 h-full bg-gray-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
              <HexColorPicker color={color} onChange={setColor} />
            </div>

            <div className="w-1/4 h-full bg-gray-800 bg-opacity-50 rounded-lg flex flex-col items-center space-y-1">
              <h1 className="text-slate-200 mt-2">Online: </h1>

              <div className="w-11/12 h-1/4 rounded-lg bg-gray-800 bg-opacity-60 flex flex-row justify-center">
                <div className="w-1/3 h-full flex flex-col items-center justify-center">
                  <Image src={"/theo.jpg"} width={64} height={64} className="rounded-full w-5/6 h-5/6"></Image>
                </div>
                <div className="w-2/3 h-full flex flex-col items-center justify-center">
                  <h1 className="text-white">Theo</h1>
                </div>
              </div>

              <div className="w-11/12 h-1/4 rounded-lg bg-gray-800 bg-opacity-60 flex flex-row justify-center">
                <div className="w-1/3 h-full flex flex-col items-center justify-center">
                  <Image src={"/nina.jpg"} width={64} height={64} className="rounded-full w-5/6 h-5/6"></Image>
                </div>
                <div className="w-2/3 h-full flex flex-col items-center justify-center">
                  <h1 className="text-white">Nina</h1>
                </div>
              </div>

              
            </div>

            <div className="w-1/2 h-full bg-gray-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center space-y-2">

              <div className="w-11/12 h-2/3 bg-gray-800 bg-opacity-50 rounded-lg overflow-y-auto"></div>

              <div className="w-11/12 h-1/6 flex flex-row justify-center space-x-1">
                <input type="text" className="w-3/4 h-full p-2 text-white bg-gray-800 bg-opacity-60 rounded-lg"></input>

                <button className="w-1/4 h-full rounded-full bg-gray-800 bg-opacity-70 text-white flex flex-row items-center justify-center">
                  <IoIosPaperPlane className="text-2xl"></IoIosPaperPlane>
                </button>
              </div>
              
            </div>
        </div>
    </div>

  </div>
}