'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="min-h-screen flex justify-center items-center">
        <h2 className="text-xl">Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}