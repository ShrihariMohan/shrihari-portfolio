export interface IDev {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  positive_reactions_count: number;
  cover_image?: null;
  tag_list?: (string)[] | null;
  canonical_url: string;
  reading_time_minutes: number;
  user: User;
}
export interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}
