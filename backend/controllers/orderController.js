import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.PAYMENT_SECRET_KEY);

// place user order for frontend

const placeOrder = async (req, res) => {

    const frontend_url= process.env.FRONTEND_URL;
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save(); // save data in database
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
// cleaning user cart data
    const line_items = req.body.items.map((i) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity
    }));
    line_items.push({
        price_data:{
            currency:"inr",
            product_data:{
                name:"Delivery charges",
            },
            unit_amount:2*10
        },
        quantity:1
    });

    const session = await stripe.checkout.session.create({
        line_items: line_items,
        mode:'payment',
        success_url :`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url :`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    })

    res.json({success:true, session_url:session.url})
  } catch (err) {

    console.log(err);
    res.json({success:false, massage:"Error"})
  }
};

export { placeOrder };
