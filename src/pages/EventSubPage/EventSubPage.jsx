import { useFetchEvent } from 'hooks/useFetchEvent';

export default function EventSubPage() {
  const event = useFetchEvent();
  console.log(event);
  return (
    // <div>Test</div>
    event && (
      <div>
        <h2>{event.name}</h2>
        <img src={event.images[0].url} alt={event.name} width={'400px'}/>
      </div>
    )
  );
};
