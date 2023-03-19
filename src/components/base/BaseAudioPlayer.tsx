import BaseCard from "~/components/base/base-card/BaseCard";

interface BaseAudioPlayerProps {
  title?: string;
  description?: string;
  uri?: string;
}

export default function BaseAudioPlayer(props: BaseAudioPlayerProps) {
  return (
    <BaseCard header={props.title}>
      <div class="p-8">
        <dl class="flex flex-grow flex-col justify-between">
          <dt class="sr-only">Description</dt>
          <dd
            class="text-sm text-gray-500 italic"
            innerHTML={props.description}
          ></dd>
        </dl>
        <div class="relative my-5">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-start">
            <span class="bg-white pr-2 text-sm text-gray-500">Track</span>
          </div>
        </div>
        <audio controls src={props.uri} class="w-full">
          <a href={props.uri}>Download audio</a>
        </audio>
      </div>
    </BaseCard>
  );
}
