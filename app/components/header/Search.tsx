import { BiSearch } from "react-icons/bi";


export default function Search() {
  return (
    <div className="md:w-auto py-2 border rounded-full shadow-sm transition cursor-pointer
                    hover:shadow-md">
      <div className="flex justify-between items-center">
        <div className="px-6 w-[40vw] sm:w-auto text-sm font-semibold">
          Anywhere
        </div>
        <div className="hidden sm:block px-6 text-sm text-center font-semibold flex-1 border-x">
          Any week
        </div>
        <div className="pl-6 pr-2 text-sm text-gray-600 flex items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 rounded-full text-white bg-cyan-600">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}
