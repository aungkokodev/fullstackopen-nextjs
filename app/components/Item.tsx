const Item = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`px-4 py-2 rounded bg-blue-50 border border-blue-400 text-gray-600 hover:text-blue-600 hover:bg-blue-100 ${className}`}
    >
      {children}
    </div>
  )
}

export default Item
