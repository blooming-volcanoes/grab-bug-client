// /* eslint-disable no-useless-return */
// /* eslint-disable no-extra-boolean-cast */
// /* eslint-disable func-names */
// /* eslint-disable no-var */
// /* eslint-disable vars-on-top */
// /* eslint-disable no-alert */
// /* eslint-disable prefer-arrow-callback */
// /* eslint-disable one-var */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/button-has-type */
// /* eslint-disable react/self-closing-comp */
// import Script from 'next/script';
// import React, { useEffect } from 'react';

// function SpeechToText() {
//     let phraseDiv;
//     // let startRecognizeOnceAsyncButton;

//     // subscription key and region for speech services.
//     let subscriptionKey, serviceRegion;
//     let SpeechSDK;
//     let recognizer;
//     useEffect(() => {
//         // startRecognizeOnceAsyncButton = document.getElementById("startRecognizeOnceAsyncButton");
//         subscriptionKey = document.getElementById("subscriptionKey");
//         serviceRegion = document.getElementById("serviceRegion");
//         phraseDiv = document.getElementById("phraseDiv");

     
//     }, [])

// const startRecognizeOnceAsyncButton =()=>{
//     phraseDiv.innerHTML = "";
//     if (subscriptionKey.value === "" || subscriptionKey.value === "subscription") {
//         alert("Please enter your Microsoft Cognitive Services Speech subscription key!");
//         return;
//       }
//       var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey.value, serviceRegion.value);

//       speechConfig.speechRecognitionLanguage = "en-US";
//       var audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
//       recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

//       recognizer.recognizeOnceAsync(
//         function (result) {
//           startRecognizeOnceAsyncButton.disabled = false;
//           phraseDiv.innerHTML += result.text;
//           window.console.log(result);

//           recognizer.close();
//           recognizer = undefined;
//         },
//         function (err) {
//           startRecognizeOnceAsyncButton.disabled = false;
//           phraseDiv.innerHTML += err;
//           window.console.log(err);

//           recognizer.close();
//           recognizer = undefined;
//         });
// }


//     if (!!window.SpeechSDK) {
//         SpeechSDK = window.SpeechSDK;
//         startRecognizeOnceAsyncButton.disabled = false;

//         document.getElementById('content').style.display = 'block';
//         document.getElementById('warning').style.display = 'none';
//       }
    
//   return (
//     <div>speechToText


// <div id="content"  >
//     <div style={{width:"100%"}}>
//         <div>
    
       
//         <h1 style={{fontWeight:500}} >Microsoft Cognitive Services Speech SDK JavaScript Quickstart</h1></div>
      
//       <div>
//         <div align="right"><a href="https://docs.microsoft.com/azure/cognitive-services/speech-service/get-started" target="_blank" rel="noreferrer">Subscription</a>:</div>
//         <div><input id="subscriptionKey" type="text" size="40"  /></div>
//       </div>
//       <div>
//         <div align="right">Region</div>
//         <div><input id="serviceRegion" type="text" size="40"  /></div>
//       </div>
     
//         <div><button onClick={startRecognizeOnceAsyncButton} id="startRecognizeOnceAsyncButton">Start recognition</button></div>
 
//       <div>
//         <div align="right" valign="top">Results</div>
//         <div><textarea id="phraseDiv" style={{display:"inline-block", width:"500px", height:"200px"}}></textarea></div>
//       </div>
//       </div>
//     </div>
//     <Script src="https://aka.ms/csspeech/jsbrowserpackageraw"></Script>
//   </div>


//   )
// }

// export default SpeechToText