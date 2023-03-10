export interface Users {
  id: string;
  type: string;
  actor: Actor;
  repo: UserRepo;
  payload: Payload;
  public: boolean;
  created_at: Date;
  org?: Actor;
}

export interface Actor {
  id: number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface Payload {
  ref?: null | string;
  ref_type?: string;
  master_branch?: string;
  description?: string;
  pusher_type?: string;
  push_id?: number;
  size?: number;
  distinct_size?: number;
  head?: string;
  before?: string;
  commits?: Commit[];
  action?: string;
  release?: Release;
  number?: number;
  pull_request?: PullRequest;
  issue?: Issue;
}

export interface Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;
}

export interface Author {
  email: string;
  name: string;
}

export interface Issue {
  url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  number: number;
  title: string;
  user: User;
  labels: any[];
  state: string;
  locked: boolean;
  assignee: null;
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  body: string;
}

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum Type {
  Organization = "Organization",
  User = "User",
}

export interface PullRequest {
  url: string;
  id: number;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: User;
  body: null | string;
  created_at: Date;
  updated_at: Date;
  closed_at: Date | null;
  merged_at: Date | null;
  merge_commit_sha: null | string;
  assignee: null;
  milestone: null;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: Base;
  base: Base;
  _links: Links;
  merged: boolean;
  mergeable: null;
  mergeable_state: string;
  merged_by: User | null;
  comments: number;
  review_comments: number;
  commits: number;
  additions: number;
  deletions: number;
  changed_files: number;
}

export interface Links {
  self: Comments;
  html: Comments;
  issue: Comments;
  comments: Comments;
  review_comments: Comments;
  review_comment: Comments;
  commits: Comments;
  statuses: Comments;
}

export interface Comments {
  href: string;
}

export interface Base {
  label: string;
  ref: string;
  sha: string;
  user: User;
  repo: BaseRepo;
}

export interface BaseRepo {
  id: number;
  name: string;
  full_name: string;
  owner: User;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface Release {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  author: User;
  prerelease: boolean;
  created_at: Date;
  published_at: Date;
  assets: Asset[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}

export interface Asset {
  url: string;
  id: number;
  name: string;
  label: null;
  uploader: User;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: Date;
  updated_at: Date;
  browser_download_url: string;
}

export interface UserRepo {
  id: number;
  name: string;
  url: string;
}
