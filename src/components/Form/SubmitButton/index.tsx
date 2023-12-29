export function SubmitButton({ children }: { children: string }) {
  return (
    <button
      className="mt-4 relative w-full bg-primary border-none p-2.5 rounded text-lg md:text-xl font-semibold tracking-widest cursor-pointer duration-300 hover:bg-primary-dark hover:text-white"
      type="submit"
    >
      {children}
    </button>
  )
}
