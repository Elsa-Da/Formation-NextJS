import { PageProps } from "@/app/lib/types";

const User = ({ params: { id } }: PageProps) => {
  return <h1>User {id}</h1>;
};

export default User;
