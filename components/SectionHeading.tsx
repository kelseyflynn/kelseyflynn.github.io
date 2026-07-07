export function SectionHeading({
  number,
  children,
  id,
}: {
  number: string;
  children: string;
  id?: string;
}) {
  return (
    <p className="eyebrow" data-number={number} id={id}>
      {children}
    </p>
  );
}
