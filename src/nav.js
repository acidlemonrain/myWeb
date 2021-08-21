 import { Menu } from 'antd' 
 import { Link } from "react-router-dom";
 function Nav() {
    return (
        <div className=""  >  
           <Menu mode="horizontal">
           <Link to="/">   <Menu.Item> Home </Menu.Item></Link>
          <Link to="/blogs">   <Menu.Item> Blog </Menu.Item></Link>
          <Link to="/history">   <Menu.Item> About </Menu.Item></Link>
            </Menu>
        </div>
    );
  }
  
  export default Nav;
  