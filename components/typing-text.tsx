'use client';

import { useEffect, useState } from 'react';

export default function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const current = words[index % words.length];
    let i = 0;
    const t = setInterval(() => {
      i++;
      setText(current.slice(0, i));
      if (i >= current.length) {
        clearInterval(t);
        setTimeout(() => setIndex((prev) => prev + 1), 1000);
      }
    }, 60);
    return () => clearInterval(t);
  }, [index, words]);

  return <span className="text-cyan-300">{text}<span className="animate-pulse">|</span></span>;
}
