let initState = {
  error_message: "",
  status: 0,
};
export const commonReducer = (state = initState, action) => {
  switch (action.type) {
    case "HANDLE_BAD_REQUEST":
      return {
        ...state,
        error_message: action.msg,
        status: action.status,
      };
    default:
      return state;
  }
};
