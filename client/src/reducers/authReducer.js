
const initialState={
    token:null,
    isAuthenticated:null,
    user:null,
    loading:false,
    error:null
}

export default (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
