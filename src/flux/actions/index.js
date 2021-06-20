export const handleAddRow = (value) => {
    return {
        type: "ADD_ROW",
        payload: { newRow: value}
    }
}