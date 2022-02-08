import Button from '@components/Button';
import Child1 from '@components/Child1';
import MainLayout from '@components/MainLayout';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const Test = ({ children }) => {
  return <div id="test">{children}</div>;
};

// Component will rerender only and only when props value or state value change

// if you pass any function as a prop then you have to wrap with useCallback

// if you pass any variable as a prop then you have to wrap with useMemo

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [test, setTest] = useState(15);
  const [todo, setTodo] = useState(null);
  const btnRef = useRef();

  // useCallback use to memorize functions
  // ComponentDidMount -> Life cycle methods
  useEffect(() => {
    console.log('called on launch');

    const loadData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await res.json();
        setTodo(json);
      } catch (error) {}
    };

    loadData();

    // server
  }, []);

  const increment = useCallback(() => {
    setCounter((abc) => {
      return abc + 1;
    });
  }, []);

  const decrement = useCallback(() => {
    setCounter((val) => val - 1);
  }, []);

  const changeColor = () => {
    // O(N)
    // document.getElementById('button1').style = 'color: red';
    btnRef.current.style = 'color: red';
  };

  // In function component if you change state value of prop value all variable will create new instance
  // useMemo use for variables
  const a = useMemo(() => ({ a: test }), [test]);

  console.log('Home render');
  return (
    <>
      <Child1 data={a} />
      <div className="flex w-1/3 items-center">
        <Button
          ref={btnRef}
          id="button1"
          title="Increment"
          onClick={increment}
        />
        <p className="px-4">{counter}</p>
        <Button title="Decrement" onClick={decrement} />
      </div>
      <Button title="Change Test value" onClick={() => setTest(20)} />
      {todo && <h1>{todo.title}</h1>}
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
