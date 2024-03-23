interface TagProps {
  color: string;
  text: string;
}

export default function Tag({ color, text }: TagProps) {
  return (
    <>
      <div
        className={`${color} rounded-full border-black border inline-block hover:bg-gray-300 transition-colors duration-200 mb-4`}
      >
        <p className={`whitespace-nowrap text-[8px] py-1 font-semibold px-5 text-black`}>
          {text}
        </p>
      </div>
    </>
  );
}
