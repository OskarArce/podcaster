interface BaseCardInfoTitleProps {
  title: string;
}

export default function BaseCardInfoTitle(props: BaseCardInfoTitleProps) {
  return <h3 class="mt-6 text-sm font-medium text-gray-900">{props.title}</h3>;
}
