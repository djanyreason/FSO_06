import { useSelector } from 'react-redux';

// The code below displays multiple notifications when there are several
// that have not yet expired.
const Notification = () => {
  const notification = useSelector(({ notification }) => notification);
  
  if(!notification) return <div></div>

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };

  return (
    <div>
      {notification.map(note => {
        return (
          <div key={note.id} style={style}>
            {note.content}
          </div>
        );
      })}
    </div>
  )
}


// The code below displays a single notification
// If a notification times out while a previous notification has not yet
// expired, the component will display to the most recent unexpired text
/*
const Notification = () => {
  const notification = useSelector(({ notification }) => 
    notification.length === 0
    ? null
    : notification[notification.length-1].content
  );

  if(!notification) return <div></div>;

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };

  return (
    <div style={style}>
      {notification}
    </div>
  );
};
*/

export default Notification;