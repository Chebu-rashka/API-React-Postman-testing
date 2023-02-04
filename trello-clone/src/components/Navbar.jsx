import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoDashboard } from "react-icons/go";
import { VscDashboard } from "react-icons/vsc";
import { BiExit } from "react-icons/bi";
import { BsGrid, BsChatDots } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const menu = [
    {
      icon: <AiOutlineDashboard />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <AiOutlinePieChart />,
      title: "Statistics",
      path: "/statistics",
    },
    {
      icon: <BsGrid />,
      title: "Space",
      path: "/space",
    },
    {
      icon: <BsChatDots />,
      title: "Inbox",
      path: "/inbox",
    },
    {
      icon: <GoDashboard />,
      title: "Notification",
      path: "/demo/3",
    },
    {
      icon: <VscDashboard />,
      title: "Schedule",
      path: "/demo/4",
    },
    {
      icon: <GoDashboard />,
      title: "Documents",
      path: "/demo/3",
    },
    {
      icon: <VscDashboard />,
      title: "Teams",
      path: "/demo/4",
    },
  ];
  return (
    <div>
      <section
        className="flex flex-col w-[250px] h-screen bg-white 
      text-black-600/50 text-start self-center border px-8 pt-6"
      >
        <div>
          <h3 className="font-bold pb-8">JERRAA.</h3>
          <ul className="flex-1">
            {menu.map((m, index) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    `flex justify-start items-center px-2
                 text-xs text-gray-400 space-x-4
                 h-10
                 hover:bg-black hover:text-white rounded -xl  ${
                   isActive ? "bg-black text-white" : ""
                 }`
                  }
                  to={m.path}
                  key={index}
                >
                  <span className="text-lg">{m.icon}</span>
                  <span>{m.title}</span>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div
          className="flex flex-col justify-end content-center
         items-center self-center pt-6 bg-gray-200 rounded-xl mt-20
         "
        >
          <span className="text-xs text-gray-600 p-3">
            Unlock more information now! Upgrade to PRO
          </span>
          <button
            className=" bg-black
           text-white  hover- text-xs p-2 mb-4 rounded-lg hover:bg-white hover:text-black"
          >
            Upgrade Now
          </button>
        </div>
        <div
          className=" flex justify-start items-center
                 text-xs text-gray-600 space-x-4 mt-12 px-4"
        >
          <div>
            <span className="text-lg">
              <BiExit />
            </span>
          </div>
          <div>Logout</div>
        </div>
      </section>
    </div>
  );
}
//ul= list haruulna (default n urdaa >ytei)
// m={icon: '', title: 'Inbox', path: '/'}tei object
//span n zgr text deer\

//HW
//navbar 4huudasd zoriulaad containersiig n uusge zamchlal hii
//demo-oo soliod 4iig uusgeed propsoor
//zamchlal davt
//context
