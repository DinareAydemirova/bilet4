import Admin from "../components/admin/Index";
import Detail from "../components/admin/detail/Index";
import Post from "../components/admin/post/Index";
import Basket from "../components/basket/Index";
import Home from "../components/home/Index";
import Layout from "../components/layout/Index";
import Wishlist from "../components/wishlist/Index";

const routes=[
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/basket",
          element:<Basket/>
        },
        {
          path:"/wishlist",
          element:<Wishlist/>
        }
      ]
    },
    {
      path:"/admin",
      element:<Admin/>
    },
    {
      path:"/:id",
      element:<Detail/>
    },
    {
      path:"/post",
      element:<Post/>
    }
  ]

  export default routes