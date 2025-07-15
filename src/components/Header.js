import logo from '../assets/logo.png';
export default function Header(){
    return(
        <header className="z-1 w-full h-[7em] px-5 m-0 flex items-center justify-between fixed">
            <div className="w-[15rem] h-[9em] bg-[15rem] bg-cover " style={{ backgroundImage: `url(${logo})` }}></div>
            <nav>
                <ul className="flex gap-5">
                    <li className='hover:nav-link'>About</li>
                    <li className='hover:nav-link'>Portfolio</li>
                    <li className='hover:nav-link'>Store</li>
                    <li className='hover:nav-link'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}