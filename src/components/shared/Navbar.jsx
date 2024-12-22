import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User2 } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-[#F9E6CF]">
      <div className="flex items-center justify-between  mx-auto max-w-7xl h-16">
        <div className="font-serif">
          <h1 className="text-2xl font-bold text-[#69247C]">
            Care<span className="text-[#F83002]"> Critic</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-Poppins font-medium items-center gap-5 text-[#543A14]">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Hospitals</Link>
            </li>
            <li>
              <Link>Doctors</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
          </ul>
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
                    <h4>Yash Shukla</h4>
                    <p className="text-sm text-muted-foreground">
                      i am a great person very best.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
