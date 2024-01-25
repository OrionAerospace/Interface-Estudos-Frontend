interface ProgressBarProps {
  progress: number
  title: string
}

export function ProgressBar({ progress, title }: ProgressBarProps) {
  return (
    <div className="w-full">
      <span className="block text-sm font-semibold text-[#333]">{title}</span>
      <div className="flex gap-2">
        <div className="h-2 w-full rounded-md mt-2 bg-black/10">
          <span
            className="relative block h-full rounded-md bg-[#4070f4] animate-progress"
            style={{ width: `${progress}%` }}
          ></span>
        </div>
        <span className="text-xs font-medium text-white py-0.5 px-1.5 rounded bg-[#4070f4]">
          {progress}%
        </span>
      </div>
    </div>
  )
}
