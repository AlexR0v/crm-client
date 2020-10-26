import React from "react";
import { NavLink } from "react-router-dom";
import c from "./SideBarMobile.module.scss";
// import iconClose from "../../../assets/images/icon-close.svg";

class SideBarMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSidebar: this.props.isShowSidebar,
    };
  }

  toggleCloseSidebar = () => {
    this.setState({ isShowSidebar: false });
  };
  render() {
    // const { isShowSidebar } = this.state;
    return (
      <div className={c.sidebar}>
        {/* {isShowSidebar && ( */}
        <div className={c.sidebar__wrap}>
          {/* <div
              className={c.sidebar__close}
              onClick={() => this.toggleCloseSidebar()}
            >
              <img src={`${iconClose}`} alt="" className={c.close} />
            </div> */}

          <div className={c.sidebar__content}>
            <div className={c.sidebar__title}>Setup</div>
            <div className={c.sidebar__search_wrap}>
              <input
                type="text"
                className={c.sidebar__search}
                placeholder="Search"
              />
            </div>
            <div className={c.sidebar__nav}>
              <div className={c.nav}>
                <div className={c.nav__item}>
                  <div className={c.nav__item_title}>Users and Control</div>

                  <div className={c.nav__item_list}>
                    <div className={c.nav__list}>
                      <div className={c.nav__item_link}>
                        <NavLink
                          to="/home"
                          className={`${c.link} ${c.link_active}`}
                        >
                          Users
                        </NavLink>
                      </div>
                      <div className={c.nav__item_link}>
                        <NavLink to="/home" className={c.link}>
                          Security Control
                        </NavLink>
                      </div>
                      <div className={c.nav__item_link}>
                        <NavLink to="/home" className={c.link}>
                          Compliance Settings
                        </NavLink>
                      </div>
                      <div className={c.nav__item_link}>
                        <NavLink to="/home" className={c.link}>
                          Territory Management
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default SideBarMobile;
