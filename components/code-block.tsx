'use client'

import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from './ui/button'
import { CheckIcon, ClipboardIcon } from 'lucide-react'

export const CodeBlock = ({
  language,
  value,
}: {
  language: string
  value: string
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <CopyToClipboard text={value} onCopy={handleCopy}>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="absolute top-2 right-2 cursor-pointer"
        >
          {copied ? (
            <CheckIcon className="size-4" />
          ) : (
            <ClipboardIcon className="size-4" />
          )}
        </Button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        wrapLongLines
        showLineNumbers
        className="rounded-lg"
        customStyle={{
          backgroundColor: 'var(--sidebar)',
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
}
