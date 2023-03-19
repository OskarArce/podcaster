import { JSX } from "solid-js";
import PageHeader from "~/components/page/PageHeader";
import PageTitle from "~/components/page/PageTitle";

export default function Page({
  children,
  header = PageTitle,
}: {
  children: JSX.Element;
  header: JSX.Element;
}) {
  return (
    <>
      <PageHeader>{header}</PageHeader>
      <div class="mx-auto max-w-7xl">
        <main class="text-center mx-auto text-gray-700 p-4">{children}</main>
      </div>
    </>
  );
}
