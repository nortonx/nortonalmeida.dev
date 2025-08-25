export default function Product({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">{children}</div>
    </div>
  );
}
