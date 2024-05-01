import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const dashboardLinks = [
  { title: "Students", url: "/studentdash" },
  { title: "Rooms", url: "/room" },
  { title: "Reports", url: "/report" },
];

const HeaderSideNav = ({ items, setIsSidebarToggled }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <aside>
      <div className="--flex-end sidebar-close">
        <IoCloseSharp
          className="sidebar-close-icon"
          onClick={() => setIsSidebarToggled(false)}
        />
      </div>
      <div className="left">
        {items.map(({ title, url }, index) => (
          <div className="--flex-center  --dir-column" key={index}>
            <Link
              to={url}
              className={index === activeIndex ? "active-link" : ""}
              onClick={() => handleLinkClick(index)}
            >
              {title}
            </Link>
          </div>
        ))}
        <div className="--flex-start --dir-column">
          <button className="btn-primary">New</button>
        </div>
      </div>
    </aside>
  );
};

export default HeaderSideNav;
