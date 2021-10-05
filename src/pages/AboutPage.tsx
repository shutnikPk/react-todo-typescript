import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h2>Страница Информации</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam
        nobis ut in, tempore voluptas unde asperiores nisi cum facilis.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};
