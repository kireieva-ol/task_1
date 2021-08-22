const addPhone = (phone) => {
  return {
    type: "ADD_PHONE",
    phone
  }
};


const deletePhone = (phone) => {
    return {
        type: "DELETE_PHONE",
        phone
    }
};

export default {addPhone, deletePhone};