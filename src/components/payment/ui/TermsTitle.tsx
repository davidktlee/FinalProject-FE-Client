import React from 'react'

interface TermsTitleProps {
  text: string
  textsize?:string
  dotsize?:string;
  textColor?:string;
}

const TermsTitle = ({ text,textsize,dotsize,textColor }: TermsTitleProps) => {
  return (
    <h3 className={`w-full pb-1 ${textColor ? textColor : 'text-lenssisDeepGray'} font-bold flex items-center gap-2`}>
      <div className={`${dotsize ? dotsize : 'w-2 h-2'} bg-lenssisDeepGray rounded-full`} /> <span className={`${textsize ? textsize : 'text-base'}`}>{text}</span>
    </h3>
  )
}

export default React.memo(TermsTitle)
