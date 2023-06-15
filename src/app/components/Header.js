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
            <div>
                <input type='text' placeholder='texto'/>
            </div>

            {/* right */}
            <div>

            </div>
        </header>
    )
}
export default Header;