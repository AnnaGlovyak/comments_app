import { commentsURL } from '../shared/config.js';

export default class FormModel {

  sendData = async (data) => {
    try {
      let response = await fetch(commentsURL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.status !== 200) {
        throw new Error('Ответ сети был не ok.');
      }
    } catch(error) {
      console.log(error);
    }
    return true;
  }
}