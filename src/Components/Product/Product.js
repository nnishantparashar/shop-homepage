import './Product.css'
import mobile from '../../Assets/mobile.png'
import star from '../../Assets/star.png'
import { useContext, useState } from 'react';
import { myContext } from '../../App';

const Product = (props) => {
   const {cartCount, setCartCount} = useContext(myContext)

  var [buttonText, setButtonText] = useState(props.product.availability)

  const handleButton = (e) =>{
    console.log(e);
        if(e === 'Add to Cart'){
            setCartCount(cartCount + 1);
           setButtonText( buttonText = 'Remove from Cart');
        }else if(e === 'Remove from Cart'){
            setCartCount(cartCount - 1);
           setButtonText(buttonText = 'Add to Cart');
        }else{
            setCartCount(cartCount);
           setButtonText(buttonText = e);
        }

   }

  
    return (
       

        <div className="card">
            <img className='product-img' src={mobile} alt="moblie"/> 
            <div className="card-body">
            <h4><b>{props.product.productName}</b></h4>
            <div className='rating'><span><img className='rating-icon' src={star} alt="rating"/></span><span><img className='rating-icon' src={star} alt="rating"/></span><span><img className='rating-icon' src={star} alt="rating"/></span><span><img className='rating-icon' src={star} alt="rating"/></span><span><img className='rating-icon' src={star} alt="rating"/></span> </div>
            
            {
                    props.product.price.map((item, index) => {
                      return <p><span className='original-price'>{item.original} </span><span>  {item.discounted}</span></p>
                    })
                  }
                  
            <button className='addRemoveButton' value={buttonText} onClick={(e)=>handleButton(e.target.value)}>{buttonText}</button>
            
        </div>
        </div>
    );
};

export default Product;