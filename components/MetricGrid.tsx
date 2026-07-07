export function MetricGrid({
  metrics,
}: {
  metrics: { value: string; label: string }[];
}) {
  if (metrics.length === 0) return null;
  return (
    <dl className="metrics">
      {metrics.map((m) => (
        <div className="metric" key={m.label}>
          <dt>{m.value}</dt>
          <dd>{m.label}</dd>
        </div>
      ))}
    </dl>
  );
}
