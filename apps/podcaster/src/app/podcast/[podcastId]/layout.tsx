export default function PodcasterLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <section>
      {sidebar}

      {children}
    </section>
  );
}
