import '../globals.css'
import Image from "next/image";



function Header() {
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 xl:px-10">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                    width={130}
                    height={100}
                    alt="Picture of the author"
                />
            </div>

            {/* moddle */}
            <div className='flex items-center border-2 rounded-full p-2 justify-between shadow-sm'>
                <input className='flex-grow pl-5 transparent outline-none text-gray-600 placeholder-gray-400' type='text' placeholder='Start your seach'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                
            </div>

            {/* right */}
            <div>

            </div>
        </header>
    )
}
export default Header;