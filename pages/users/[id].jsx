import {useRouter} from "next/router";

export default function Users({user}) {
  const {query} = useRouter();
  return (
    <div>
      <h1>Пользователь с id {query.id}</h1>
      <div>Имя пользователя - {user.name}</div>
    </div>
  );
}


export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: {user}
  }
}
