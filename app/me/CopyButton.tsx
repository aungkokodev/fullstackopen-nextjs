'use client'

import { useState } from 'react'

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 5000)
  }

  return (
    <button
      onClick={handleCopy}
      disabled={copied}
      className='text-xs py-1 px-2 bg-blue-50 hover:opacity-80 hover:cursor-pointer active:opacity-100'
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default CopyButton
