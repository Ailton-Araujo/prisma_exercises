export type Post = {
  id: number;
  username: string;
  title: string;
  content: string;
  createAt?: string;
};

export type ApplicationError = {
  name: string;
  message: string;
};
