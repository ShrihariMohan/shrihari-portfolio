import React from "react";

interface H1 {
  text: string,
  highlight?: number[],
}

const H1: React.FC<H1> = ({ text, highlight = [] }) => {
  const elements = HighlightedText({ text, highlight })
  return (
    <h1 className="text-4xl sm:text-5xl tracking-wide font-light leading-[2.8rem] sm:leading-[3.5rem]">
      {elements}
    </h1>
  )
}

const HighlightedText: React.FC<{ text: string, highlight: number[] }> = ({ text, highlight }) => {
  const highlightedText = text.split(" ").map((char, index) => {
    const withSpaceChar = char + " "
    if (highlight.includes(index)) {
      return <span key={index} className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500 ">{withSpaceChar} </span>
    }
    return withSpaceChar
  })

  return (
    <>{highlightedText}</>
  )
}

export default H1