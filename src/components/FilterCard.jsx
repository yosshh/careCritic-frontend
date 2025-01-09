import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label'; 

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
        filterType: "Speciality",
        array: ["Neurology", "Cardiac", "Skin"],
    }
];

const FilterCard = () => {
    return (
        <div className="w-full bg-white p-5 rounded-lg shadow-md">
            <h1 className="font-bold text-xl text-[#441752]">Filter Hospitals</h1>
            <hr className="mt-3 mb-4" />
            
            <RadioGroup>
                {filterData.map((data, index) => (
                    <div key={index} className="mt-6">
                        <h1 className="font-semibold text-lg mb-3 text-[#A31D1D]">{data.filterType}</h1>
                        
                        <div className="flex flex-wrap gap-4">
                            {data.array.map((item, idx) => {
                                const itemId = `${data.filterType}-${idx}`;
                                return (
                                    <div key={itemId} className="flex items-center space-x-2">
                                        <RadioGroupItem value={item} id={itemId} />
                                        <Label htmlFor={itemId}>{item}</Label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default FilterCard;
