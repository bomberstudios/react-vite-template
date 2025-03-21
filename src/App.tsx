import { useState } from "react";
import "./App.css";
import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
}

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
}

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((count) => count + 1);

  return (
    <>
      <h1>Vite + React</h1>
      <Card>
        <Button onClick={handleClick}>count is {count}</Button>
      </Card>
    </>
  );
}
