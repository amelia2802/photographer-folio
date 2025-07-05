import logo from '../assets/logo.png';
export default function Header(){
    return(
        <header className="w-full h-auto p-0 m-0 flex items-center justify-between">
            <div className="w-[15rem] h-[9em] bg-[15rem] bg-cover " style={{ backgroundImage: `url(${logo})` }}></div>
            <nav>
                <ul className="flex gap-5">
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Store</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}