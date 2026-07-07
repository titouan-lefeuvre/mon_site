
type ButtonProps = {
  text: string;
  href: string;
  };

export default function Button({ text, href }: ButtonProps) {
  return (
    <button
      onClick={() => window.open(href, "_blank")}
      className="px-12 py-6 border-4 border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-300 hover:text-black transition-all"
          >
      {text}
    </button>
  );
}