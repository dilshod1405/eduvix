import Link from "next/link"

export const Logo = () => {
    return (
        <div className="text-center">
            <Link href='/' className='md:text-3xl text-2xl font-bold mr-auto logo p-2'>ProHub</Link>
        </div>
    )
}