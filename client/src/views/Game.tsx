import React from 'react';
import Player from './Player';
import Dealer from './Dealer';

function Game(props:any) {
  let {gameState} = props;
  let {started, hands, players, game_id, current_turn} = gameState;
  return (
    <div id = "game">
      GAME
      <Dealer hand = {hands[0]}/>
      <div id = "players">
      {players.map((player: any, idx: number) => <Player hands = {hands} players = {players} idx = {idx}/>)}
      {/* <Player hands = {hands} players = {players} idx = {0}/>
      <Player hands = {hands} players = {players} idx = {1}/>
      <Player hands = {hands} players = {players} idx = {2}/>
      <Player hands = {hands} players = {players} idx = {3}/> */}
      </div>
    </div>
  );
}

export default Game;