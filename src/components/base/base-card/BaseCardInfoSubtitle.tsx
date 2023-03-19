interface BaseCardInfoSubtitleProps {
  subtitle: string;
}

export default function BaseCardInfoSubtitle(props: BaseCardInfoSubtitleProps) {
  return (
    <dl class="mt-1 flex flex-grow flex-col justify-between">
      <dt class="sr-only">Title</dt>
      <dd class="text-sm text-gray-500">{props.subtitle}</dd>
    </dl>
  );
}
