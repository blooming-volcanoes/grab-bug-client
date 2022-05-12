import { combineReducers } from 'redux'
import alert from './alertReducer'
import auth from './authReducer'
import call from './callReducer'
// import detailPost from './detailPostReducer'
// import discover from './discoverReducer'
import message from './messageReducer'
import modal from './modalReducer'
import notify from './notifyReducer'
import online from './onlineReducer'
import peer from './peerReducer'
// import homePosts from './postReducer'
import socket from './socketReducer'
// import profile from './profileReducer'
// import status from './statusReducer'
// import suggestions from './suggestionsReducer'
import theme from './themeReducer'


export default combineReducers({
    auth,
    alert,
    theme,

    modal,

    socket,
    notify,
    message,
    online,
    call,
    peer
})