import React from "react";
import Image from "next/image";

const MarketNotify = () => {
  return (
    <div className="size-full p-4 grid justify-center">
      <div className="w-[42em] h-[17em] bg-white rounded-xl shadow-md p-4 space-y-10">
        <h3 className="font-bold text-2xl text-gray-900">Notifications</h3>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/bellpg.png"}
            alt="notification"
            width={100}
            height={100}
          />
          <p className="font-bold text-xl text-zinc-500">
            You have no notification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketNotify;
