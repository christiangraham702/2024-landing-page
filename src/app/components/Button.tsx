interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-blue-500 border-black border-2 px-4 py-2 rounded-lg text-black transition-all duration-200 ease-in-out hover:border-gray-300 hover:text-gray-300 shadow-offset-gray active:translate-x-1 active:translate-y-1 active:shadow-none">
      {text}
    </button>
  );
}