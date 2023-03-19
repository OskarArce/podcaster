import { JSX } from "solid-js";

interface BaseCardHeaderProps {
  title: JSX.Element;
}

export default function BaseCardHeader(props: BaseCardHeaderProps) {
  return (
    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
      <h3 class="text-base font-semibold leading-6 text-gray-900">
        {props.title}
      </h3>
    </div>
  );
}
