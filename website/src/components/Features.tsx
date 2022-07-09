import React, { ReactNode } from "react";
import styles from "./Features.module.css";

interface Props {
  children: ReactNode;
}

export default function Features({ children }: Props) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </section>
  );
}
