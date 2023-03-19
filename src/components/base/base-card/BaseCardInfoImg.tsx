interface BaseCardInfoImgProps {
  imageSrc: string;
  title?: string;
}

export default function BaseCardInfoImg(props: BaseCardInfoImgProps) {
  return (
    <img
      class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
      src={props.imageSrc}
      alt={props.title}
    />
  );
}
