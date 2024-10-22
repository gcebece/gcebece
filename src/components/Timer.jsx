import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AppStyled = styled.div`
  background-image: linear-gradient(15deg, #1a1a1a, var(--color-bg));
  color: var(--color-text);
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  min-height: 150vh; /* Full viewport height */
`;

const ContainerStyled = styled.section`
  padding: 1rem;
`;

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 35.5em) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0 2rem;
  }
`;

const DateStyled = styled.header`
  margin-bottom: 2rem;

  & h1 {
    color: var(--color-heading);
    font-family: var(--font-family-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: 0.1875em;

    text-align: center;
    text-transform: uppercase;
  }
`;
const DateStyled2 = styled.header`
  margin-bottom: 2rem;

  & h1 {
    color: var(--color-heading);
    font-family: var(--font-family-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 800;
    letter-spacing: 0.1875em;

    text-align: center;
    text-transform: uppercase;
  }
`;

const CounterStyled = styled.div`
  background: rgba(255, 255, 255, 0.025);
  border-radius: 1rem;
  color: var(--color-counter);
  display: flex;
  flex-direction: column;
  font-family: "JetBrains Mono", mono;
  font-size: clamp(1rem, 8vw, 99rem);
  font-weight: 100;
  line-height: 1;
  padding: 2vw;
  text-align: center;

  h2 {
    color: var(--color-heading);
    font-family: var(--font-family-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: 0.1875em;

    order: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
  }
`;

// Timing
const targetDate = new Date("November 7, 2024 00:00:00").getTime();

const generateTimeDisplay = () => {
  const rightJustNow = new Date().getTime();
  const runway = targetDate - rightJustNow;
  const stateObj = {
    days: Math.floor(runway / (1000 * 60 * 60 * 24)),
    hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((runway % (1000 * 60)) / 1000),
  };
  return stateObj;
};

// Components
const Counter = ({ displayValue, label }) => (
  <CounterStyled>
    <h2>{label}</h2>
    {displayValue}
  </CounterStyled>
);

const Timer = () => {
  const [timeDisplay, setTimeDisplay] = useState(generateTimeDisplay());

  const updateCounters = () => setTimeDisplay(generateTimeDisplay());

  useEffect(() => {
    const interval = setInterval(updateCounters, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppStyled>
      <ContainerStyled>
        <DateStyled2>
          <h1>Reviva 2k25 🔥</h1>
        </DateStyled2>
        <DateStyled>
          <h1>🎉 Coming Soon 🎉</h1>
        </DateStyled>
        <WrapperStyled>
          <Counter displayValue={timeDisplay.days} label={"Days"} />
          <Counter displayValue={timeDisplay.hours} label={"Hours"} />
          <Counter displayValue={timeDisplay.minutes} label={"Minutes"} />
          <Counter displayValue={timeDisplay.seconds} label={"Seconds"} />
        </WrapperStyled>
      </ContainerStyled>
    </AppStyled>
  );
};

export default Timer;
