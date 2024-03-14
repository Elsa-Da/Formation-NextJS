import { UsersPageProps } from "@/app/lib/types";

const User = ({ params: { id } }: UsersPageProps) => {
  return <h1>User {id}</h1>;
};

export default User;
