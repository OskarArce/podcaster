// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { PodcastProvider } from "~/contexts/podcast";
import { PodcastEpisodeProvider } from "~/contexts/podcast-episode";
import ResourceLoaderPodcast from "~/components/resource-loader/ResourceLoaderPodcast";
import TheHeader from "~/components/TheHeader";
import "./root.css";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <Html lang="en" class="h-full bg-gray-100">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Body class="h-full">
        <Suspense>
          <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
              <PodcastProvider>
                <PodcastEpisodeProvider>
                  <div class="min-h-full">
                    <TheHeader />
                    <ResourceLoaderPodcast>
                      <Routes>
                        <FileRoutes />
                      </Routes>
                    </ResourceLoaderPodcast>
                  </div>
                </PodcastEpisodeProvider>
              </PodcastProvider>
            </QueryClientProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
