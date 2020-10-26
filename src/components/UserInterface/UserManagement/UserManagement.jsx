import React from "react";
import SideBar from "../SideBar/SideBar";
import SideBarMobile from "../SideBarMobile/SideBarMobile";
import c from "./UserManagement.module.scss";
import UsersContainer from "./Users/UsersContainer";

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSidebar: false,
    };
  }

  toggleShowSidebar = () => {
    const { isShowSidebar } = this.state;
    this.setState({ isShowSidebar: !isShowSidebar });
  };

  toggleCloseSidebar = () => {
    this.setState({ isShowSidebar: false });
  };

  isToggleSelectBox = () => {
    this.props.isToggleSelectBox();
  };

  changeValueSelectBox = (value) => {
    this.props.changeValueSelectBox(value);
  };

  render() {
    const { isShowSidebar } = this.state;
    return (
      <div className={c.user_management}>
        {!isShowSidebar && (
          <div
            className={c.mobile_sidebar}
            onClick={() => this.toggleShowSidebar()}
          >
            <div className={c.mobile_sidebar__text}>Setup</div>
          </div>
        )}
        <div className={c.user_management__sidebar}>
          {isShowSidebar && <SideBarMobile isShowSidebar={isShowSidebar} />}
          <SideBar />
        </div>

        <div
          className={c.user_management__content}
          onClick={() => this.toggleCloseSidebar()}
        >
          <UsersContainer />
        </div>
      </div>
    );
  }
}

export default UserManagement;
