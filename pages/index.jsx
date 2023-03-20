import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJs events</title>
        <meta
          name="description"
          content="events related to nextjs and whatever other info"
        />
      </Head>

      <EventList items={featuredEvents} />
    </div>
  );
}
