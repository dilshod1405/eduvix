import Link from "next/link"

export const Logo = () => {
    return (
        <div className="text-center">
            <Link href='/' className='md:text-4xl text-3xl font-bold mr-auto text-sky-600 p-2'>EduVix</Link>
        </div>
    )
}