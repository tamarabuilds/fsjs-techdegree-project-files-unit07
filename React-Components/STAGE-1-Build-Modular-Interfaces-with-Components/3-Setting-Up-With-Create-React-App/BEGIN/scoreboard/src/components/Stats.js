import React from "react";
import PropTypes from 'prop-types';

const Stats = ({players}) => {
    const totalPlayers = players.length
    const totalPoints = players.reduce( (acc, c) => acc + c.score, 0)

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    )
}

Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    })).isRequired,
};

export default Stats;