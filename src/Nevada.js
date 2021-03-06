import { useEffect, useState } from "react";
const NUMERO_DE_FLOCS_INICIAL = 10;

function crearFlocs() {
  const flocs = [];
  for (let i = 0; i < NUMERO_DE_FLOCS_INICIAL; i++) {
    flocs.push(crearFloc());
  }
  return flocs;
}

function crearFloc() {
  return { x: -10 - 10 * Math.random(), y: 100 * Math.random() };
}

function moureFlocs(flocs) {
  return flocs.map(moureFloc);
}
function moureFloc(floc) {
  let x = floc.x + 5 * Math.random();
  if (x > 100) x = -10;
  return { ...floc, x };
}

export default function Nevada() {
  const [flocs, setFlocs] = useState(crearFlocs);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setFlocs(moureFlocs);
    }, 100);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      {flocs.map((floc, index) => (
        <Floc key={index} floc={floc} />
      ))}
    </>
  );
}
function Floc({ floc }) {
  const style = {
    top: `${floc.x}%`,
    left: `${floc.y}%`,
    position: "absolute",
    color: "white",
  };
  return <span style={style}> ❄ </span>;
}
