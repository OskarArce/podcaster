import { JSX } from "solid-js";

interface BaseCardInfoProps {
  children: JSX.Element;
}

export default function BaseCardInfo(props: BaseCardInfoProps) {
  return <div class="flex flex-1 flex-col p-8">{props.children}</div>;
}
