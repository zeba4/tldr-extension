const functions = require('firebase-functions');
const deepai = require('deepai');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest(async(request, response) => {
    try {
        if(request.method !== "POST"){
            response.send(405, 'HTTP Method ' +request.method+' not allowed');
        }
        console.log(typeof request.body);
        const yourRequestObject = request.body;
        //const yourRequestObject1= request.body;
        console.log("holaaaaaa");
        console.log(yourRequestObject);
       
        console.log(yourRequestObject.text);
        
        functions.logger.info("Hello logs!", {structuredData: true});
      //response.send("Hello from Firebase!");
    
      
    deepai.setApiKey('2aa3b482-d727-459d-b09f-59a6685a17e2');
    console.log("hello");
    
        var resp = await deepai.callStandardApi("summarization", {
                text: yourRequestObject.text
    
        });
        console.log();
        console.log("hi");
        response.send(resp);
    } catch (error) {
        console.log(error);
    }
    

});