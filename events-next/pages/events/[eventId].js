import EventContent from "@/components/events/event-content";
import EventLogistics from "@/components/events/event-logistics";
import EventSummary from "@/components/events/event-summary";
import { getEventById } from "@/dummy";
import { useRouter } from "next/router";

export default function EventDetail() {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return <p>No Event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
