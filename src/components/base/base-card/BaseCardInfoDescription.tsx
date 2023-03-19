interface BaseCardInfoDescriptionProps {
  description?: string;
}

export default function BaseCardInfoDescription(props: BaseCardInfoDescriptionProps) {
  return (
    <>
      <div class="relative my-5">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-start">
          <span class="bg-white pr-2 text-sm text-gray-500">Description</span>
        </div>
      </div>
      <dl class="flex flex-grow flex-col justify-between">
        <dt class="sr-only">Description</dt>
        <dd class="text-sm text-gray-500 italic">{props.description}</dd>
      </dl>
    </>
  );
}
