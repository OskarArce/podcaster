import { Switch, Match, For } from "solid-js";
import { type CreateQueryResult } from "@tanstack/solid-query";

export default function PageTitle({
  query,
  children,
  ...props
}: {
  query: CreateQueryResult<false | readonly any[] | null | undefined, unknown>;
  children: any;
  class?: string;
}) {
  return (
    <Switch>
      <Match when={query.isLoading}>
        <p>Loading...</p>
      </Match>
      <Match when={query.isError}>
        <p>Error: {query.error.message}</p>
      </Match>
      <Match when={query.isSuccess}>
        <ul class={props.class}>
          <For each={query.data}>{children}</For>
        </ul>
      </Match>
    </Switch>
  );
}
