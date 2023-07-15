// A mock function to mimic making an async request for data
const baseURL = 'http://127.0.0.1:3000/api/v1/greetings';

const fetchGreeting = () => {
  const response = fetch(baseURL)
    .then((response) => response.json());
  return response;
};

export default fetchGreeting;
