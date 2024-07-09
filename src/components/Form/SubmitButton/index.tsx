export function SubmitButton({ children }: { children: string }) {
  return (
    <button
      className="text-white mt-4 relative w-full bg-primary border-none p-2.5 rounded text-lg md:text-xl font-semibold tracking-widest cursor-pointer duration-300 hover:hsla(204, 97%, 50%, 0.89) "
      type="submit"
    >
      {children}
    </button>
  )
}
