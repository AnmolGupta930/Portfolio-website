"use client";
import Container from "./components/container";
import cn from "./lib/utils/cn";
import Grid from "./components/grid";

export default function Home() {
  return (
    <>
      <div
        className={cn("bg-background min-h-screen", "my-bg-pattern")}
        // "bg-[radial-gradient(rgba(44,44,44,0.171)2px,transparent_0px)] [background-size:_10px_10px] dark:bg-[radial-gradient(rgba(253,240,213,0.171)2px,transparent_0px)]"
      >
        <Container className="max-sm:px-4">
          <Grid />
        </Container>
      </div>
    </>
  );
}
