interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div>
      <div className="text-3xl font-medium mb-1">{value}</div>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <div className="mt-16 w-full border-t pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatItem value="500K+" label="men trust our treatments" />
        <StatItem value="£60+" label="average savings with our 6-month plan" />
        <StatItem value="4.8/5" label="customer satisfaction rating" />
      </div>
    </div>
  );
}
