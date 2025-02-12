import Link from "next/link"

export const Logo = () => {
    return (
        <div className="text-center">
            <Link href='/' className='md:text-3xl text-2xl font-bold mr-auto logo'><span className="text-indigo-500">Pro</span>Hub</Link>
        </div>
    )
}