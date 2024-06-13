import React from "react";
import UserLayout from "../../components/userlayout/userlayout";

function page() {
  return (
    <>
      <UserLayout>
        <div>
          <div className=" bg-emerald-500 h-[150px] w-full"> </div>
          <div className="grid grid-cols-2 md:grid-cols-4 h-4/5 w-full p-4 gap-6">
            <div className=" rounded-lg col-span-1 h-[175px] p-4 bg-amber-500 text-white">
              Shopping
            </div>
            <div className=" rounded-lg col-span-1 h-[175px] p-4 bg-sky-500 text-white">
              Treading
            </div>
            <div className=" rounded-lg col-span-2 h-[175px] p-4 bg-teal-500  text-white">
              Info
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
}

export default page;
