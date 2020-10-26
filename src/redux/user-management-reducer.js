const CHANGE_VALUE_SELECT_BOX = 'CHANGE-VALUE-SELECT-BOX';
const OPEN_SELECT_BOX = 'OPEN-SELECT-BOX';
const OPEN_USER_BOX = 'OPEN-USER-BOX';

const initialState = {
  selectBox: {
    isShowList: false,
    defaultSelectItem: "All Users",
    selectList: [
      "All Users",
      "Active Users",
      "Inactive Users"
    ]
  },

  userBox: {
    isShowUserBox: false,
  }

}

const userManagementReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_VALUE_SELECT_BOX:
      return {
        ...state,
        selectBox: {
          ...state.selectBox,
          isShowList: false,
          defaultSelectItem: action.changedValue,
        }
      }
    case OPEN_SELECT_BOX:
      if (state.selectBox.isShowList === false) {
        return {
          ...state,
          ...state.selectBox.isShowList = true
        }
      } else {
        return {
          ...state,
          ...state.selectBox.isShowList = false
        }
      }
    case OPEN_USER_BOX:
      if (state.userBox.isShowUserBox === false) {
        return {
          ...state,
          ...state.userBox.isShowUserBox = true
        }
      } else {
        return {
          ...state,
          ...state.userBox.isShowUserBox = false
        }
      }


    default:
      return state;
  }

}

export const changeValueSelectBox = (changedValue) => ({ type: CHANGE_VALUE_SELECT_BOX, changedValue })
export const isToggleSelectBox = () => ({ type: OPEN_SELECT_BOX })
export const isToggleUserBox = () => ({ type: OPEN_USER_BOX })


export default userManagementReducer;