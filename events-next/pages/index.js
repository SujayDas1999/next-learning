import { getAllEvents, getFeaturedEvents } from "@/dummy";
import EventList from "@/components/events/event-list";

export default function Index() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventList events={featuredEvents} />
    </>
  );
}
