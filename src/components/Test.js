import {
  useApplicationStateColor,
  useApplicationStateName,
} from '../ApplicationState';

const Test = () => {
  console.log('render, Test');

  const [color, setColor] = useApplicationStateColor();
  const [name, setName] = useApplicationStateName();

  return (
    <>
      <input
        onChange={(event) => setName(event.currentTarget.value)}
        value={name}
      />
      <button onClick={() => setColor('orange')}>set color</button>
    </>
  );
};

export default Test;
