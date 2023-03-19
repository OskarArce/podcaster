import { JSX } from "solid-js";
import BaseCardHeader from "~/components/base/base-card/BaseCardHeader";
import BaseCardInfo from "~/components/base/base-card/BaseCardInfo";
import BaseCardInfoImg from "~/components/base/base-card/BaseCardInfoImg";
import BaseCardInfoTitle from "~/components/base/base-card/BaseCardInfoTitle";
import BaseCardInfoSubtitle from "~/components/base/base-card/BaseCardInfoSubtitle";
import BaseCardInfoDescription from "~/components/base/base-card/BaseCardInfoDescription";

interface BaseCardProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  header?: string;
  children?: JSX.Element;
}

export default function BaseCard(props: BaseCardProps) {
  const hasInfo =
    props.imageSrc || props.title || props.subtitle || props.description;

  return (
    <div class="rounded-lg bg-white text-center shadow">
      {props.header ? <BaseCardHeader title={props.header} /> : null}
      {hasInfo ? (
        <BaseCardInfo>
          {props.imageSrc ? (
            <BaseCardInfoImg imageSrc={props.imageSrc} title={props.title} />
          ) : null}
          {props.title ? <BaseCardInfoTitle title={props.title} /> : null}
          {props.subtitle ? (
            <BaseCardInfoSubtitle subtitle={props.subtitle} />
          ) : null}
          {props.description ? (
            <BaseCardInfoDescription description={props.description} />
          ) : null}
        </BaseCardInfo>
      ) : null}
      {props.children}
    </div>
  );
}
