import { historicalEvents } from "@/content/events";

export function EventTimeline() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {historicalEvents.map((event, index) => (
        <li
          className="relative overflow-hidden rounded-lg border border-[var(--line)] bg-[rgb(255_253_247_/_78%)] p-5 shadow-sm"
          key={event}
        >
          <span className="text-xs font-bold uppercase text-[var(--sindoor)]">
            Record {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 min-h-14 font-semibold leading-7">{event}</p>
        </li>
      ))}
    </ol>
  );
}
