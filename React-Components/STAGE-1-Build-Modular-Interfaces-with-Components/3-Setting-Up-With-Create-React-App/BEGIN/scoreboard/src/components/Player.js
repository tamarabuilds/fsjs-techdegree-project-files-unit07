import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter'
import HighestScore from './HighestScore';

const Player = ({name, score, id, removePlayer, changeScore}) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <HighestScore
            highest={[1, 3]}
            id={id}
          />
          {name}
        </span>
  
        <Counter 
            score={score}
            id={id}
            changeScore={changeScore}    
        />
      </div>
    );
  }

const playerPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    changeScore: PropTypes.func.isRequired
};

export default memo(Player, playerPropsAreEqual);