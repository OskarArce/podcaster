import { ResponseError } from "solid-start";
import { Switch, Match, For, JSX } from "solid-js";
import { type CreateQueryResult } from "@tanstack/solid-query";

export default function Cell({
  query,
  children,
  ...props
}: {
  query: CreateQueryResult<false | readonly any[] | null | undefined, unknown>;
  children: (item: any) => JSX.Element;
  class?: string;
}) {
  return (
    <Switch>
      <Match when={query.isLoading}>
        <p>Loading...</p>
      </Match>
      <Match when={query.isError}>
        <p>Error: {(query.error as ResponseError).message}</p>
      </Match>
      <Match when={query.isSuccess}>
        <ul class={props.class}>
          <For each={query.data}>{children}</For>
        </ul>
      </Match>
    </Switch>
  );
}
