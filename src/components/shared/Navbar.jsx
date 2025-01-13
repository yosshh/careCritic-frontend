import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User2 } from "lucide-react";
import { Button } from "../ui/button";
import logo from '../../assets/logo.png';
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth); // Access user and role from Redux

  // Determine profile route based on user role
  console.log("Redux user object:", user);

  const getProfileRoute = () => {
    const role = user?.doctor?.role || user?.role; // Adjust this based on your structure
    console.log("Determined Role:", role); // Debug log
  
    if (role === "Doctor") return "/doctorProfile";
    if (role === "Hospital") return "/hospitalProfile";
    return "/userProfile";
  };
  

  return (
    <div className="bg-[#F9E6CF]">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div className="font-serif flex">
          <Link to="/">
            <Button variant="outline">
              <Avatar>
                <AvatarImage src={logo} />
              </Avatar>
              <h1 className="text-2xl font-bold text-[#69247C]">
                Care<span className="text-[#F83002]"> Critic</span>
              </h1>
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-Poppins font-medium items-center gap-5 text-[#543A14]">
            <li className="hover:text-[#dba14a]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#dba14a]">
              <Link to="/hospital">Hospitals</Link>
            </li>
            <li className="hover:text-[#dba14a]">
              <Link to="/doctors">Doctors</Link>
            </li>
            <li className="hover:text-[#dba14a]">
              <Link>About Us</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="bg-[#FB4141] hover:bg-[#79f146]"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#79f146] hover:bg-[#FB4141]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4>{user.name || "Guest"}</h4>
                      <p className="text-sm text-muted-foreground">
                        Welcome to Care Critic!
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        <Link to={getProfileRoute()}>View Profile</Link>
                      </Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
