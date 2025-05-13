import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

export default function Timer( { minute, className } ) {
  const [ timeLeft, setTimeLeft ] = useState( ( minute || 1 ) * 60 ); // 60 seconds
  const timerRef = useRef( null );

  useEffect( () => {
    if ( timeLeft > 0 ) {
      timerRef.current = setInterval( () => {
        setTimeLeft( ( prev ) => prev - 1 );
      }, 1000 );
    } else {
      clearInterval( timerRef.current );
    }

    return () => clearInterval( timerRef.current );
  }, [ timeLeft ] );

  const formatTime = ( seconds ) => {
    const mins = String( Math.floor( seconds / 60 ) ).padStart( 2, '0' );
    const secs = String( seconds % 60 ).padStart( 2, '0' );
    return `${mins}:${secs}`;
  };

  return (
    <div className={className}>{formatTime( timeLeft )}</div>
  );
}

Timer.propTypes = {
  minute: PropTypes.number,
  className: PropTypes.string
}