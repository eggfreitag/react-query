export interface User {
  actor: Actor;
  created_at: Date;
  id: string;
  payload: Payload;
  public: boolean;
  repo: Repo;
  type: string;
}

export interface Actor {
  avatar_url: string;
  gravatar_id: string;
  id: number;
  login: string;
  url: string;
}

export interface Payload {
  description: string;
  master_branch: string;
  pusher_type: string;
  ref: string;
  ref_type: string;
}

export interface Repo {
  id: number;
  name: string;
  url: string;
}
