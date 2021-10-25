import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter();
  // When called here, the 'counter' state (set in the 'useCounter' hook will be tied to this component)
  // We can call 'useCounter()' in multiple components, and each will have its own 'counter' state
  // The same is true of effects. If I use 'useEffect()' in the custom hook, each component where 'useCounter()' is called will have its own effect
  // Only the logic is shared

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
