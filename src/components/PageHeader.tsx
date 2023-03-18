export default function PageHeader({ children }) {
  return (
    <header class="bg-white shadow-sm">
      <div class="mx-auto max-w-7xl py-4 px-4">
        <div class="flex flex-1 justify-between px-4">
          <div class="flex flex-1">{children}</div>
        </div>
        <h1 class="text-lg font-semibold leading-6 text-gray-900"></h1>
      </div>
    </header>
  );
}
