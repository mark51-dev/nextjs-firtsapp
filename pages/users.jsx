import {useEffect, useState} from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
  return (
    <div>
      <MainContainer>
        <h1>Список пользоваетелей</h1>
        <ul>
          {
            users.map(user => {
              return (
                <li key={user.id}>
                  <Link href={`/users/${user.id}`}>
                    <a>{user.name}</a>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </MainContainer>
    </div>
  );
};

export default Users;


export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: {users}, // will be passed to the page component as props
  }
}
