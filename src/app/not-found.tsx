import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl mb-4">Page Not Found</p>
            <Link href="/" className="text-blue-500 hover:underline">
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
