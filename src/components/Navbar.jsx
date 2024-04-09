import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, UserProfile, Notification } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl hover:bg-light-gray rounded-full p-3"
      >
        {dotColor && (
          <span
            style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
          />
        )}
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex items-center justify-between md:mx-6 p-2 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        {/* cart */}
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        {/* chat */}
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        {/* notification */}
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        {/* profile */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer hover:bg-light-gray p-1 rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-8 h-8" alt="" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 text-14 font-bold ml-1">
                Micheal
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
