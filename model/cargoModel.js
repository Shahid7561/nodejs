const mongoose = require("mongoose");

var cargoSchema  = new mongoose.Schema({
    senderCompany:{
        type:String
    },
    receiverCompany:{
        type:String
    },
    invoiceNo:{
        type:String
    },
    Date:{
        type:Date,
        default:Date.now
    },
    From:{
        type:String
    },
    To:{
        type:String
    },
    noOfArticles:{
        type:String
    },
    packingMode:{
        type:String
    },
    Description:{
        type:String
    },
    actualWeight:{
        type:String
    },
    doubleWeight:{
        type:String
    },
    chargeWeight:{
        type:String
    },
    ewayBillNo:{
        type:String
    },
    Rate:{
        type:String
    },
    Freight:{
        type:String
    },
    Handling:{
        type:String
    },
    gatePass:{
        type:String
    },
    doorDelivery:{
        type:String
    },
    CGST:{
        type:String
    },
    SGST:{
        type:String
    },
    IGST:{
        type:String
    },
    grandTotal:{
        type:String
    },
    Value:{
        type:String
    },
    paymentMode:{
        type:String
    },
    cargoType:{
        type:String
    },
    Status:{
        type:String
    }
});

module.exports = mongoose.model('Cargo',cargoSchema)