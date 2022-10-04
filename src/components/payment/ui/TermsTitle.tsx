import React from 'react'

interface TermsTitleProps {
  text: string
}

const TermsTitle = ({ text }: TermsTitleProps) => {
  return (
    <h3 className="w-full pb-1 text-lenssisDeepGray font-bold flex items-center gap-2">
      <div className="w-2 h-2 bg-lenssisDeepGray rounded-full" /> {text}
    </h3>
  )
}

export default React.memo(TermsTitle)
