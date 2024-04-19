import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
}

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href} passHref>
      <button className="bg-buttonblue border-black border md:px-4 md:py-2 px-3 py-2 rounded-lg text-black transition-all duration-200 ease-in-out hover:border-gray-300 hover:text-gray-300 shadow-offset-gray hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-md mr-2">
        {text}
      </button>
    </Link>
  );
}