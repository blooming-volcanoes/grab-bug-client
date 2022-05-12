/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import CallModal from 'components/message/CallModal';
import SocketClient from 'pages/SocketClient';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from 'redux/actions/authAction';
import { GLOBALTYPES } from "redux/actions/globalTypes";
import { io } from "socket.io-client";

const GlobalLayout = ({children}) => {
    const dispatch = useDispatch();
    const {auth, socket, call} = useSelector(state => state)
    useEffect(() => {
        dispatch(loadUser())
    const socket = io('http://localhost:5000')
    // console.log(socket);
    dispatch({type: GLOBALTYPES.SOCKET, payload:socket})
    return () => socket.close()
    }, [dispatch]);


    useEffect(() => {
      import("peerjs").then(({ default: Peer }) => {
          // normal synchronous code
          const newPeer = new Peer(undefined, {
              path: '/', secure: true
            })
            
            dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
      })
  }, [])



  return (
    <div>
      {(auth.user?._id && socket.connected) &&         <SocketClient />}
      {(call)&& <CallModal /> }
        <main>{children}</main>
    </div>
  )
}

export default GlobalLayout