import React from "react";
import UserItem from "./UserItem/UserItem";
import UserItemProfile from "./UserItemProfile/UserItemProfile";
import UserItemProfileMobile from "./UserItemProfileMobile/UserItemProfileMobile";
import c from "./Users.module.scss";
import axios from 'axios'

class Users extends React.Component {
  isToggleSelectBox = () => {
    this.props.isToggleSelectBox();
  };

  changeValueSelectBox = (value) => {
    this.props.changeValueSelectBox(value);
  };



  render() {
    axios.post('http://18.184.124.193/api/v1/users').then(res=>console.log(res))
    return (
      <div className={c.content_section}>
        <div className={c.content_section__header}>
          <div className={c.header}>
            <div className={c.header__title_wrap}>
              <div className={c.header__title}>Users</div>
            </div>
          </div>
        </div>
        <div className={c.content_section__wrap}>
          <div className={c.content_section__users}>
            <div className={c.users}>
              <div className={c.users__header}>
                <div className={c.users__select_box}>
                  <div className={c.select_box}>
                    <div
                      className={c.select_box__container}
                      onClick={() => this.isToggleSelectBox()}
                    >
                      {this.props.defaultSelectItem}
                    </div>

                    {this.props.isShowList && (
                      <div className={c.select_box__list}>
                        {this.props.selectList.map((value) => {
                          if (value !== this.props.defaultSelectItem) {
                            return (
                              <div
                                className={c.select_box__item}
                                onClick={() => {
                                  this.props.changeValueSelectBox(value);
                                }}
                              >
                                {value}
                              </div>
                            );
                          } else {
                            return false;
                          }
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div className={c.users__btn_wrap}>
                  <button className={c.users__btn}>New Users</button>
                </div>
              </div>
              <div className={c.users__list}>
                <UserItem />
              </div>
            </div>
          </div>
          <div className={c.content_section__user_profile}>
            <UserItemProfile />
          </div>
          <div className={c.content_section__user_profile_mobile}>
            <UserItemProfileMobile />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
