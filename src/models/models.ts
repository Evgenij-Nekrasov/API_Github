export interface IUser {
   login: string;
   id: number;
   url: string;
   type: string;
}

export interface ServerResponse<T> {
   total_count: number;
   incomplete_results: boolean;
   items: T[];
}

export interface IRepo {
   id: number;
   node_id: string;
   name: string;
   full_name: string;
   private: boolean;
   owner: IOwner;
   html_url: string;
   description: string;
   fork: boolean;
   url: string;
}

export interface IOwner {
   login: string;
   id: number;
   node_id: string;
   avatar_url: string;
   gravatar_id: string;
   url: string;
   html_url: string;
}
