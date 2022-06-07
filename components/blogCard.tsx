import Image from "next/image"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { IDev } from "../types/devToTypes";



function BlogCard({ obj }: { obj: IDev }) {
  return (
    <div className="border-2 rounded-lg border-slate-600 m-4 cursor-pointer drop-shadow-3xl max-w-[470]  hover:scale-105 hover:transition-transform" onClick={() => window.open(obj.url)} style={{ maxWidth: 450 }}>
      <BlogTitle id={obj.id} />
      <BlogBody obj={obj} />
    </div >
  )
}


function BlogTitle({ id }: { id: number }) {
  return (<Image src={`https://dev.to/social_previews/article/${id}.png`} width={474} height={232} layout='responsive' objectFit="fill" className="rounded-t-lg drop-shadow-3xl" />);
}

function BlogBody({ obj }: { obj: IDev }) {
  return (<div className="p-3">
    <p className="text-slate-300 text-lg mb-2">
          {obj.description}
    </p>
    <div className="mb-4">

      {
        obj.tag_list?.map((each, ind) => {
          return (
            <span className="text-slate-400" key={each}>{each + (ind + 1 != (obj?.tag_list?.length || 0) ? ' ·' : '')}  </span>
          )
        })
      }
    </div>
        <div className="flex justify-between">
          <div>
            <span className="mr-4 font-bold">
              <FavoriteBorderIcon className="text-pink-700" /> {obj.public_reactions_count}
            </span>
            <span className="mr-4 font-bold">
              <VisibilityOutlinedIcon className="text-green-700" /> {obj.page_views_count}
            </span>
            <span className="mr-4 font-bold">
              <ModeCommentOutlinedIcon className="text-yellow-700" /> {obj.comments_count}
            </span>
          </div>
          <p className="text-slate-400"> {obj.reading_time_minutes} min read</p>
        </div>

  </div>);
}

export default BlogCard

