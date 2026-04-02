import { useState } from "react";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const slides = ["Slide 1", "Slide 2", "Slide 3"];

  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div>
      <h2>{slides[index]}</h2>

      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>

      <div>
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={i === index ? "active-dot" : ""}
          >
            •
          </span>
        ))}
      </div>
    </div>
  );
}