const ItemReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return state.concat([action.data]);
        default:
            return state;
    }
};
export default ItemReducer;
