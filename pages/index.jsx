import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/input/newsletter-registration"

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
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
}
