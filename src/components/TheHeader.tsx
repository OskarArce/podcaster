import { useIsRouting, useLocation, A } from "solid-start";
import { Show } from "solid-js";
import NProgress from "./base/BaseNProgress";

export default function TheHeader() {
  const isRouting = useIsRouting();
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "bg-indigo-700"
      : "hover:bg-indigo-500 hover:bg-opacity-75";

  return (
    <nav class="bg-indigo-600">
      <div class="mx-auto max-w-7xl px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex items-baseline space-x-4">
              <A
                href="/"
                class={`${active(
                  "/"
                )} text-white rounded-md px-3 py-2 text-sm font-medium`}
                activeClass="bg-indigo-700"
                inactiveClass="hover:bg-indigo-500 hover:bg-opacity-75"
                aria-current="page"
              >
                Podcaster
              </A>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6 relative">
              <Show when={isRouting()}>
                <NProgress />
              </Show>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
