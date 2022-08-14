

export default function SetTest(state = [], action)  {
  switch (action.type) {
    case "change_data":
      state = action.payload;
      return state;
    default:
      return action.payload;
  }
};
