import Link from "next/link";

import {
  ErrorButton,
  ErrorHeader,
  ErrorText,
  ErrorWrapper,
} from "@layouts/Error/Error.module";

interface ErrorProps {
  code: number;
  text: any;
}

export default function Error({ code, text }: ErrorProps) {
  return (
    <>
      <ErrorWrapper>
        <ErrorHeader>{code}</ErrorHeader>
        <ErrorText>{text}</ErrorText>
        <Link href={"/"}>
          <ErrorButton>Go Back</ErrorButton>
        </Link>
      </ErrorWrapper>
    </>
  );
}
