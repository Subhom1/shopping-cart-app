export const HANDLE_BAD_REQUEST = (msg, status) => ({
  type: "HANDLE_BAD_REQUEST",
  payload: msg,
  status,
});
