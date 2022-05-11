import Image from "next/image"
import PrimaryButton from "./Buttons/primaryButton"
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import OutlinedButton from "./Buttons/outlinedButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';



function BlogCard({ obj }: { obj: any }) {
  return (
    <div className="border rounded-lg border-slate-600 m-4 cursor-pointer hover:transition-transform" onClick={() => window.open(obj.url)} style={{ width: 472 }} >
      <Image src={`https://dev.to/social_previews/article/${obj.id}.png`}
        width={472} height={250}
        className="rounded-t-lg" />
      <div className="p-3">
        <p className="text-slate-300 text-lg mb-4" >
          {obj.description}
        </p>

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
      </div>
    </div >
  )
}

export default BlogCard
