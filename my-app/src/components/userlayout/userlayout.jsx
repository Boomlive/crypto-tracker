import Sidebar from "../sidebar/sidebar";

export default function userLayout({ children }) {
  return (
    <>
      <div className="flex">
        {/* sidebar */}
        <div className="flex lg:w-1/5">
          <Sidebar></Sidebar>
        </div>
        {/* content */}
        <div className="w-full lg:w-4/5">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
