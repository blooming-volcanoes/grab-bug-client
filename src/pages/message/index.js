/* eslint-disable no-underscore-dangle */
import AuthenticatedLayout from 'Layouts/AuthenticatedLayout'
import SocketClient from 'pages/SocketClient'
import React from 'react'
import { BsMessenger } from 'react-icons/bs'
import LeftSide from '../../components/message/LeftSide'

function Message() {

    // const dispatch = useDispatch();
    // const {auth, socket, call} = useSelector(state => state)


       
    return (
        <AuthenticatedLayout>
            {/* <div> */}
           

            {/* </div> */}
            <SocketClient />
      <div className="message flex">
            <div className="w-full md:w-1/4 border-4 px-0">
                <LeftSide />
            </div>

            <div  className="w-full px-0 right_mess">
                <div className="flex justify-center 
                items-center flex-col h-full">
                    <i className="fab fa-facebook-messenger text-primary"
                    style={{fontSize: '5rem'}} />
                    <BsMessenger className='text-blue-600' style={{fontSize: '5rem'}} />
                    <h4>Messenger</h4>

                </div>
            </div>
        </div>
        </AuthenticatedLayout>
  
    )
}

export default Message