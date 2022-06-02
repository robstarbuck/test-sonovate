import { ApolloError } from "@apollo/client";
import { Card } from "../Card";

type ErrorProps = {
  error: ApolloError;
};

export default function PageError(props: ErrorProps) {
  const { error } = props;
  return <Card>{error.message}</Card>;
}
