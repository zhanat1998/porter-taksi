'use client'

import { useState } from 'react'
import WorkerApplicationModal from './WorkerApplicationModal'

type Props = {
  className?: string
  children?: React.ReactNode
}

export default function WorkerApplicationButton({ className, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children || (
          <>
            <span>👷</span>
            <span>Иштегим келет</span>
          </>
        )}
      </button>

      <WorkerApplicationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}