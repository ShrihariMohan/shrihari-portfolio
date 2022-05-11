import { LinkPreview } from '@dhaiwat10/react-link-preview';

'https://dev.to/shrihari/colors-design-inspiration-websites-for-new-comers-1lcb'
function BlogsContainer() {
  return (
    <LinkPreview url='https://dev.to/shrihari/colors-design-inspiration-websites-for-new-comers-1lcb'
      width={420}
      openInNewTab={true}
      showLoader={true}
      backgroundColor={'#1e293b'}
      borderColor={'#94a3b8'}
      primaryTextColor={'#22d3ee'}
      secondaryTextColor={'#cbd5e1'}
      borderRadius={15}
      className="border-2" />
  )
}

export default BlogsContainer