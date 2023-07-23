import EventItem from "./event-item";
import styles from "./event-list.module.css";

export default function EventList(props) {
  return (
    <ul className={styles.list}>
      {props.events &&
        props.events.map((event) => {
          return <EventItem event={event} key={event.id} />;
        })}
    </ul>
  );
}
