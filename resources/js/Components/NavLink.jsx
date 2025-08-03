import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-[#DC143C] text-white'
                    : 'border-transparent text-white hover:border-white hover:text-white') +
                ' ' + className
            }

        >
            {children}
        </Link>
    );
}
