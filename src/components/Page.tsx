import PageHeader from "~/components/PageHeader";
import PageTitle from "~/components/PageTitle";

export default function Page({ children, header = PageTitle }) {
  return (
    <>
      <PageHeader>{header}</PageHeader>
      <div class="mx-auto max-w-7xl">
        <main class="text-center mx-auto text-gray-700 p-4">{children}</main>
      </div>
    </>
  );
}
