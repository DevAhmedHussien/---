
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "var(--primary-background)",
      }}
    >
     <div>
        <h1 style={{ fontSize: "4rem", margin: "0" }}>404</h1>
        <h5 style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
          Упс! Страница не найдена
        </h5>
        <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
          Похоже, страница, которую вы ищете, не существует или была перемещена. 
          Пожалуйста, проверьте адрес или вернитесь на главную страницу.
        </p>
        <Button asChild>
          <Link href="/">На главную</Link>
        </Button>
      </div>
    </div>
  );
}