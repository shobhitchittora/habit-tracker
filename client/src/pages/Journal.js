import { useEffect } from 'react';

import { Text } from '../components';

function JournalPage() {

  useEffect(async () => {
    try {
      const response = await fetch('/journal', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
      }).then(res => res.json());

      console.log(response);
    } catch(e){
      console.log(e);
    }
  }, []);
  return (
    <>
      <Text component="h1">Journal</Text>
    </>
  )
}

export default JournalPage;