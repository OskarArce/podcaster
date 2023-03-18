import { JSX } from "solid-js";

export default function PodcastList({ children }: { children: JSX.Element }) {
  return (
    <ul class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {children}
    </ul>
  );
}
