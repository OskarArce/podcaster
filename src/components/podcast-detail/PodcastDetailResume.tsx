import { usePodcast } from "~/contexts/podcast";
import PodcastDetailLink from "~/components/podcast-detail/PodcastDetailLink";
import BaseCard from "~/components/base/base-card/BaseCard";
import BaseCardInfo from "~/components/base/base-card/BaseCardInfo";
import BaseCardInfoImg from "~/components/base/base-card/BaseCardInfoImg";
import BaseCardInfoTitle from "~/components/base/base-card/BaseCardInfoTitle";
import BaseCardInfoSubtitle from "~/components/base/base-card/BaseCardInfoSubtitle";
import BaseCardInfoDescription from "~/components/base/base-card/BaseCardInfoDescription";

export default function PodcastDetailResume() {
  const [_podcasts, { getSelected }] = usePodcast();
  const podcast = getSelected();

  return (
    <BaseCard>
      <BaseCardInfo>
        <PodcastDetailLink>
          <BaseCardInfoImg
            imageSrc={podcast?.image ?? ""}
            title={podcast?.name}
          />
        </PodcastDetailLink>
        <PodcastDetailLink>
          <BaseCardInfoTitle title={podcast?.name ?? ""} />
        </PodcastDetailLink>
        <PodcastDetailLink>
          <BaseCardInfoSubtitle subtitle={podcast?.artist ?? ""} />
        </PodcastDetailLink>
        <BaseCardInfoDescription description={podcast?.description} />
      </BaseCardInfo>
    </BaseCard>
  );
}
