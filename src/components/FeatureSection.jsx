import { Hospital } from "lucide-react";
import { Star } from "lucide-react";
import { MessageSquareDiff } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar } from "./ui/avatar";

const FeatureSection = () => {
  return (
    <div className="relative border-b border-neutral-800 min-h-[700px] bg-[#8FD14F]">
      <div className="text-center">
        <span className="bg-[#347928] text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl text-white sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily The{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Best Option
          </span>
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
        <div className="w-full sm:w-1/2 lg:w-2/3 flex justify-between">
          
          {/* Hospital Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer h-24 w-24">
                <div className="flex h-24 w-24 bg-[#FFFBE6] hover:bg-[#e7e4d5] text-[#FCCD2A] justify-center items-center rounded-full">
                  <Hospital className="h-12 w-12" />
                </div>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <h4 className="mt-1 mb-1 text-xl">Search</h4>
              <p className="text-sm text-muted-foreground">
                Search hospitals by location, specialty, or name.
              </p>
            </PopoverContent>
          </Popover>

          {/* Star Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer h-24 w-24">
                <div className="flex h-24 w-24 bg-[#FFFBE6] hover:bg-[#e7e4d5] text-[#FCCD2A] justify-center items-center rounded-full">
                  <Star className="h-12 w-12" />
                </div>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <h4 className="mt-1 mb-1 text-xl">Comparison</h4>
              <p className="text-sm text-muted-foreground">
                Compare ratings, reviews, and services.
              </p>
            </PopoverContent>
          </Popover>

          {/* Message Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer h-24 w-24">
                <div className="flex h-24 w-24 bg-[#FFFBE6] hover:bg-[#e7e4d5] text-[#FCCD2A] justify-center items-center rounded-full">
                  <MessageSquareDiff className="h-12 w-12" />
                </div>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <h4 className="mt-1 mb-1 text-xl">Reviews</h4>
              <p className="text-sm text-muted-foreground">
                Read authentic patient reviews.
              </p>
            </PopoverContent>
          </Popover>

          {/* Shield Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer h-24 w-24">
                <div className="flex h-24 w-24 bg-[#FFFBE6] hover:bg-[#e7e4d5] text-[#FCCD2A] justify-center items-center rounded-full">
                  <ShieldCheck className="h-12 w-12" />
                </div>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <h4 className="mt-1 mb-1 text-xl">Quality Check</h4>
              <p className="text-sm text-muted-foreground">
                Get insights into hospital quality and care.
              </p>
            </PopoverContent>
          </Popover>

          {/* Analysis Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer h-24 w-24">
                <div className="flex h-24 w-24 bg-[#FFFBE6] hover:bg-[#e7e4d5] text-[#FCCD2A] justify-center items-center rounded-full">
                  <ChartNoAxesCombined className="h-12 w-12" />
                </div>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <h4 className="mt-1 mb-1 text-xl">Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Make informed decisions with our expert analysis.
              </p>
            </PopoverContent>
          </Popover>
          
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
