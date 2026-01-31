import Image from "next/image";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <section className="hero" style={{ textAlign: "center" }}>
      <Image
        src="/IMRAN PIC.jpeg"
        alt="Muhammad Imran"
        width={180}
        height={180}
        style={{
          borderRadius: "50%",
          border: "4px solid #58a6ff",
          marginBottom: "25px",
        }}
      />

      <h1>
        Hi, I'm <span>Muhammad Imran</span> 👋
      </h1>

      <h2>Next.js & Frontend Developer</h2>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        I create modern, responsive and high-performance web applications using
        Next.js, React and TypeScript.
      </p>
    </section>
  );
}
