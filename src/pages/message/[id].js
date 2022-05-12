/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import AuthenticatedLayout from 'Layouts/AuthenticatedLayout'
import React from 'react'
import LeftSide from '../../components/message/LeftSide'
import RightSide from '../../components/message/RightSide'

const Conversation = () => {
    return (
        <AuthenticatedLayout>
        <div className="message flex">
            <div className="md:w-1/4 border-r-2 px-0 left_mess">
                <LeftSide />
            </div>

            <div className="md:w-3/4 px-0">
                <RightSide />
            </div>
        </div>
        </AuthenticatedLayout>

    )
}

export default Conversation
