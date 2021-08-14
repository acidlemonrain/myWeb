import Logo from "./icon/logo"
import Rain from "./icon/rain";
import Toggle from "./icon/toggle";

 const navItemStyle = {
     padding:'21px 12px',
     fontSize: '14px',
     cursor:'pointer'
 }
 const navStyle = {
     boxShadow: 'rgb(3 27 78 / 10%) 0px 2px 4px'
 }
function Nav() {
    return (
        <div className="w-screen flex justify-center" style={navStyle}>  
             
            <a className="text-color-blue-200  absolute block nav-item" style={{...navItemStyle,left:0,fontSize:'16px'}}>   
               <Rain  width="25" height="25" ></Rain>
           </a>
            
            <div className="flex">

                    <a style={navItemStyle} className=" nav-item text-color-blue-200 block">Story</a>
                    <a style={navItemStyle} className=" nav-item text-color-blue-200 block"> Work </a>
            </div>

            <a className="text-color-blue-200  absolute block nav-item" style={{...navItemStyle,right:0,fontSize:'16px'}}>   
               <Toggle  width="25" height="25" ></Toggle>
           </a>

        </div>
    );
  }
  
  export default Nav;
  