import { getFilteredEvents } from "@/dummy";
import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";

export default function FilteredEvents() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading..</p>;
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (isNaN(filteredMonth) || isNaN(filteredYear)) {
    return <p className="center">Loading..</p>;
  }

  const filteredEvent = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvent || filteredEvent.length === 0) {
    return <p>No events found for the selected year and month</p>;
  }

  return (
    <>
      <div>
        <EventList events={filteredEvent} />
      </div>
    </>
  );
}
