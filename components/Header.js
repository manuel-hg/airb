import Image from "next/image";



function Header() {
    return(
        <header className="sticky top-0 z-50">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                    width={180}
                    height={90}
                    alt="Picture of the author"
                />
            </div>

            {/* moddle */}
            <div>

            </div>

            {/* right */}
            <div>

            </div>
        </header>
    )
}
export default Header;