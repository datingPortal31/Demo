const express = require('express')

const app = express()

var cors = require('cors')
app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World")
})



app.post('/webhook', async (req, res)   =>  {
    const paymentId = req.body.id;
    const payment = await mollie.payments.get(paymentId);
    // Update your DB HERE based on the status of the payment
    console.log(payment)
    console.log("console")

    res.status(200).send();
  });



app.listen(3000,()=>{console.log("Running..")})
