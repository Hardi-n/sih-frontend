// import { Button } from "@/shadcn/ui/button";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-between w-full items-center">
            <Link to="/" className="text-2xl font-bold">
              Logo
            </Link>

            <div className="flex gap-x-5 mr-5 font-medium lg:mr-10">
              <Link to={""}>Home</Link>

              <Link to={"about"}>About</Link>
              <Link to={"login"}>Login</Link>
              <Link to={'signup'}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
