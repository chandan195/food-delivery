import userModel from "../models/userModel.js"


//add items to user card

const addToCard = async(req ,res)=>{
try {
    let userData= await userModel.findOne({_id:req.body.userId});
    // console.log(userData)
    let cartData= await userData.cartData;
    if(!cartData[req.body.itemId]){
     cartData[req.body.itemId]=1;
    }else{
        cartData[req.body.itemId]+=1 ;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true ,massage:"added to card"});
    // console.log(res)
} catch(error){
    console.log(error);
    res.json({success:false ,massage:"error "});
}
   

}


//remove items from user card

const removeFromCard = async(req ,res)=>{
    try {
        let userData= await userModel.findOne({_id:req.body.userId});
        let cartData= await userData.cartData;
        if(cartData[req.body.itemId]>0){
         cartData[req.body.itemId] -=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true ,massage:"Remove from card"});
    } catch(error){
        console.log(error);
        res.json({success:false ,massage:"error "});
    }
}

// fetch user card data

const getCard = async(req ,res)=>{

    try {
        let userData= await userModel.findOne({_id:req.body.userId});
        let cartData= await userData.cartData;
       
        res.json({success:true , cartData });
    } catch(error){
        console.log(error);
        res.json({success:false ,massage:"error "});
    }
    
}

export{addToCard,removeFromCard,getCard}