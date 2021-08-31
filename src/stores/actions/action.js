import database from '@react-native-firebase/database';
export const types = {
  GET_LIST_DATA: 'GET_LIST_DATA',
  SET_CURRENT_UID: 'SET_CURRENT_UID',
  SET_LIST_DATA : 'SET_LIST_DATA',
};

export const getListData = () => {
  return function (dispatch) {
    database()
      .ref('/items')
      .on(
        'value',
        querySnapShot => {
          const response = querySnapShot.val() ? querySnapShot.val() : {};
          const data = Object.values(response);
          dispatch({type: types.GET_LIST_DATA, payload: data});
        },
        function (error) {
          console.log(error);
        },
      );
  };
};

export const incrementCurrentUid = data => {
  return {
    type: types.SET_CURRENT_UID,
    payload: data,
  };
};

export const getCurrentUid = () => {
  return function (dispatch) {
    database()
      .ref('/items')
      .limitToLast(1)
      .once('value')
      .then(function (snapshot) {
        var lastNode;
        snapshot.forEach(function (childSnapshot) {
          lastNode = childSnapshot.val();
        });
        if (lastNode) {
          dispatch(incrementCurrentUid(lastNode.uid));
        }
      });
  };
};


export const setListData = data => {
  return {
    type: types.SET_LIST_DATA,
    payload: data,
  };
}
