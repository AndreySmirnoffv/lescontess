require('dotenv').config({ path: "./modules/.env" })
const express = require('express')
const app = express()
const stripe = require('stripe')(process.env.STRIPE_PUBLIC_KEY)
const bodyParser = require("body-parser")
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.post("/checkout", cors(), async (req, res) => {
  let {amount, id} = req.body
  try{
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      description: "lescontes company",
      payment_method: id,
      confirm: true
    })
    console.log("Payment", payment)
    res.json({
      message: "Payment successful",
      success: true
    })
  }catch(error){
    console.log("error: " + error)
    res.json({
      message: "Payment failed",
      success: false
    })
  }
})

app.listen(process.env.PORT || 8000, () => console.log("server is listening on port 8000"))