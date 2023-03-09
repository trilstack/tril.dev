import {Link} from "@inertiajs/react";

export default function Header() {
    return (
        <header className="flex p-8 gap-8">
            <div className="flex items-center gap-6">
                <Link href="/" className="flex gap-2 items-center link">
                    <img alt="TRIL stack logo" className="h-10 w-10 shadow" src="/images/logo.png"/>
                    <div className="text-xl font-bold">
                        TRIL Stack
                    </div>
                </Link>
                <Item href="https://github.com/trilstack/awesome-tril">
                    Resources
                </Item>
                <Item href="https://enrise.com">
                    Partners
                </Item>
                <Item href="https://github.com/trilstack">
                    GitHub
                </Item>
            </div>
        </header>
    );
}

const Item = ({children, href}) => {
    return (
        <a href={href} className="flex gap-2 px-3 py-2 items-center text-xl font-bold rounded link">
            {children}
        </a>
    )
}
