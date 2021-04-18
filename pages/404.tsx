import { default as ErrorPage } from "@layouts/Error";

export default function Error404() {
  return (
    <ErrorPage
      code={404}
      text={
        <>
          It looks like you're lost.. <br /> Do you want to return?
        </>
      }
    />
  );
}
