import A from "./A";

const MainContainer = ({children}) => {
  return (
    <>
      <A href={'/'} text={'Главная'}/>
      <A href={'/users'} text={'Пользователи'}/>
      <div>
        {children}
      </div>
    </>
  );
};

export default MainContainer;
