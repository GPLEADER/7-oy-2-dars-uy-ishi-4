import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPlayer, removePlayer, updateScore } from '../store/playersListSlice';

const PlayerListSlice = () => {
    const [name, setName] = useState('');
    const [score, setScore] = useState(0);
    const players = useSelector(state => state.players.players);
    const dispatch = useDispatch();

    const handleAddPlayer = () => {
        if (name.trim()) {
            dispatch(addPlayer({ name, score: Number(score) }));
            setName('');
            setScore(0);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Players List</h1>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Player Name"
                    className="border p-2 flex-1 rounded"
                />
                <input
                    type="number"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    placeholder="Score"
                    className="border p-2 w-20 rounded"
                />
                <button
                    onClick={handleAddPlayer}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Player
                </button>
            </div>
            <ul className="space-y-2">
                {players.map(player => (
                    <li
                        key={player.id}
                        className="flex items-center justify-between bg-gray-100 p-2 rounded shadow"
                    >
                        <div>
                            <p className="font-bold">{player.name}</p>
                            <p>{player.score}</p>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="number"
                                defaultValue={player.score}
                                onBlur={(e) =>
                                    dispatch(updateScore({ id: player.id, score: Number(e.target.value) }))
                                }
                                className="border p-1 w-20 rounded"
                            />
                            <button
                                onClick={() => dispatch(removePlayer(player.id))}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerListSlice;
