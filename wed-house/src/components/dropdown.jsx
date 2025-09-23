
  import {Link , useNavigate} from 'react-router-dom'
  
  const data = {
    products :["Casuals","Sports","Heavy-duty","Traditional","Indoor","Minimal"],
    category :["Mens","Women","Kids","Infants","Unisex"],
    brand :["Nike","Puma","FILA","New Balance","Adidas"],
    Home :["My profile","Orders","Wish List","notification","Logout"]
  }

export default function Dropdown(){

  return (
    <>
     <div className="drop-down-div">
      <div>
        <h4>Products</h4>
        {
          data.products.map((e,i)=>(
            <div key={i}>{e}</div>
          ))
        }
      </div>

      <div>
        <h4>Brand</h4>
        {
          data.brand.map((e,i)=>(
            <div key={i}>{e}</div>
          ))
        }
      </div>
      <div>
        <h4>Catagory</h4>
        {
          data.category.map((e,i)=>(
            <div key={i}>{e}</div>
          ))
        }
      </div>
     </div>
    </>
  )
}

export function UserDrop(){
  const navigate = useNavigate();
  return(
    <>
     <div className="user-drop-div">
       <div>
        <img  src="./icons/profile.png" alt="profile" />
        My Profile
        </div>
       <div onClick={()=>navigate('/orders')}>
        <img  src="./icons/orders.png" alt="orders" />
        Orders
        </div>
       <div onClick={()=>navigate('/wishlist')}>
        <img  src="./icons/favorite.png" alt="" />
        Wishlist
        </div>
       <div>
        <img  src="./icons/notification.png" alt="" />
        Notifications
        </div>
       <div onClick={()=>localStorage.clear()}>
        <img  src="./icons/login.png" alt="" />
        Logout
        </div>
     </div>
    </>
  )
}