import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGreeting, fetchAsync } from '../../redux/reducers/greetingSlice';
// Greeting component
const Greeting = () => {
  const greeting = useSelector(selectGreeting);
  const dispatch = useDispatch();

  const onGreetingClicked = () => {
    dispatch(fetchAsync());
  };

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  const container = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={container}>
      <header>
        <h1> Welcome to the Greeting App </h1>
      </header>

      <p style={{ marginTop: -30, fontSize: 16, color: 'gray' }}> You can see random greeting message by clicking the greeting button</p>

      <div className="row">
        {' '}
        <span style={{ color: 'cadetblue', fontStyle: 'italic', fontSize: 24 }}>
          {greeting}
        </span>
      </div>
      <div>
        <button
          style={{
            marginTop: 20, fontSize: 20, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, backgroundColor: 'crimson', color: 'white', borderRadius: 5,
          }}
          type="button"
          aria-label="Get greeting"
          onClick={onGreetingClicked}
        >
          Greet
        </button>
      </div>
    </div>
  );
};

export default Greeting;
