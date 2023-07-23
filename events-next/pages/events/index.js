import { getAllEvents } from "@/dummy";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";

export default function GetAllEvents() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPathName = `/events/${year}/${month}`;

    router.push(fullPathName);
  }

  return (
    <>
      <div>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList events={events}></EventList>
      </div>
    </>
  );
}
