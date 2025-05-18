"use client"
import Navbar from "./usernav"
import { usePathname } from "next/navigation";
import Adminnav from "./adminnav";
function Nav()
{
  let pathname = usePathname();
  let isAdmin = pathname?.startsWith('/admin');

  return(<>
  {isAdmin ? <Adminnav/> : <Navbar/>}
  
  
  </>)}

  export default Nav;