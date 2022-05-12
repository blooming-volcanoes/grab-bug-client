import React from "react";
// import { MessengerCustomerChat } from "react-messenger-customer-chat";
// 👇️ for default export
const MessengerCustomerChat = require("react-messenger-customer-chat");

// 👇️ for named export
// const { yourModule } = require('your-module');

function Facebook() {
    return (
        <div>
            <MessengerCustomerChat pageId="116518961036114" appId="511622123792735" />
        </div>
    );
}

export default Facebook;
