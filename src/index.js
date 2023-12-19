/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import "./scrable.css";

const TextScramble = ({
  texts = ["Hello world from React Scrumble "],
  letterSpeed = 20,
  nextLetterSpeed = 100,
  paused = false,
  pauseTime = 0,
  textStyles = {},
  containerStyle = {},
  scrambledColor = "gray",
  revealedColor = "black",
  onAnimationEnd,
  onTextScrambleComplete,
  symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
}) => {
  const isInitialMount = useRef(true);
  const [currentText, setCurrentText] = useState("");
  const initSymbols = currentText
    .split("")
    .map(() => symbols[Math.floor(Math.random() * symbols.length)]);
  const [displayedText, setDisplayedText] = useState(initSymbols);

  const leftIndexes = [];

  const defaultLeftIndexes = () => {
    currentText.split("").forEach((_, i) => {
      leftIndexes.push(i);
    });
  };

  const nextItem = (array, currentItem) => {
    const currentIndex = array.indexOf(currentItem);
    if (currentIndex === -1) {
      return array[0];
    } else if (currentIndex === array.length - 1) {
      return array[0];
    } else {
      return array[currentIndex + 1];
    }
  };

  let bakeLetterInterval;
  let bakeTextInterval;

  const bakeLetter = () => {
    bakeLetterInterval = setInterval(() => {
      if (!paused) {
        const updatedText = [];

        currentText.split("").forEach((_, i) => {
          if (!leftIndexes.includes(i)) {
            updatedText[i] = (
              <span
                key={i}
                style={{ color: revealedColor }}
                className='scramble'
              >
                {currentText[i]}
              </span>
            );
            return;
          }

          const randomSymbol =
            symbols[Math.floor(Math.random() * symbols.length)];
          updatedText[i] = (
            <span key={i} style={{ color: scrambledColor }}>
              {randomSymbol}
            </span>
          );
        });

        setDisplayedText(updatedText);
      }
    }, letterSpeed);
  };

  const bakeText = () => {
    defaultLeftIndexes();
    bakeLetter();

    bakeTextInterval = setInterval(() => {
      if (!paused) {
        if (leftIndexes.length === 0) {
          clearInterval(bakeLetterInterval);
          clearInterval(bakeTextInterval);

          setTimeout(() => {
            setCurrentText(nextItem(texts, currentText));
            defaultLeftIndexes();
          }, pauseTime);

          if (currentText === texts[texts.length - 1]) {
            if (onTextScrambleComplete) {
              onTextScrambleComplete();
            }
          }
        }

        leftIndexes.shift();
      }
    }, nextLetterSpeed);
  };

  useEffect(() => {
    if (!paused && !isInitialMount.current) {
      bakeText();
    }
    isInitialMount.current = false;
    return () => {
      clearInterval(bakeLetterInterval);
      clearInterval(bakeTextInterval);
    };
  }, [currentText, paused]);

  return (
    <div className='container'>
      <p>{displayedText}</p>
    </div>
  );
};

export default TextScramble;
