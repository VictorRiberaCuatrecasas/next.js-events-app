import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
