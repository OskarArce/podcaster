import { useIsRouting, useLocation, A } from "solid-start";
import { Show } from "solid-js";
import NProgress from "./NProgress";

export default function Header() {
  const isRouting = useIsRouting();
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  return (
    <nav class="bg-sky-800 relative">
      <ul class="container flex items-center p-3 text-gray-200">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <A href="/">Podcaster</A>
        </li>
      </ul>
      <Show when={isRouting()}>
        <NProgress />
      </Show>
    </nav>
  );
}
