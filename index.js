const AWS = require("aws-sdk")
const KEY_ID = "AKIAQA6VR6Z4MC22OJRA"
const SECRET_KEY = "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"

const BUCKET_NAME = "han"

const s3 = new AWS.S3({
    accessKeyId: KEY_ID,
    secretAccessKey: SECRET_KEY,

});

const params = {
    Bucket: BUCKET_NAME
}

s3.createBucket(params,(err, data)=>{

    if(err){
        console.log(err)
    }
    else{
         console.log("Bucket Created Successfully");
    }
})