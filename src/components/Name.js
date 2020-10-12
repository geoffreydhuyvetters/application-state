import { useApplicationStateName } from '../ApplicationState';

const Name = () => {
  console.log('render, Name');

  const [name] = useApplicationStateName();
  return <div>{name}</div>;
};

export default Name;
