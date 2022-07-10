import React from "react";
import TwitterTweetEmbed from 'react-tweet-embed'
import BigTitle from '../Typograpy/bigTitle'
export function Mentions({ }) {
  return (
    <div className="mb-16">
      <BigTitle text='@ Mentions' classes='text-center'></BigTitle>
      <div className='flex justify-center rounded-md '>
        <TwitterTweetEmbed tweetId='1531249566657437698' className='min-w-[350px] max-w-[450px] rounded-md' />

      </div>
    </div>
  )
}
