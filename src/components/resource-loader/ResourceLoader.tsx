import { ResponseError } from "solid-start";
import { Switch, Match, JSX } from "solid-js";
import { type CreateQueryResult } from "@tanstack/solid-query";

export default function ResourceLoader({
  query,
  children,
}: {
  query: CreateQueryResult<false | readonly any[] | null | undefined, unknown>;
  children: JSX.Element;
}) {
  return (
    <Switch>
      <Match when={query.isLoading}>
        <p>Loading...</p>
      </Match>
      <Match when={query.isError}>
        <p>Error: {(query.error as ResponseError).message}</p>
      </Match>
      <Match when={query.isSuccess}>{children}</Match>
    </Switch>
  );
}
