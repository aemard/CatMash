import {
    repository,
  } from '@loopback/repository';
  import {
    post,
    requestBody,
  } from '@loopback/rest';
  import { Match, Cat } from '../models';
  import { CatRepository } from '../repositories';
  import { catmash } from '../config';
  
  const Elo = require('elo-calculator');
  
  export class MatchController {
  
    constructor(
      @repository(CatRepository)
      public catRepository: CatRepository,
    ) {
    }
  
    @post('/matches', {
      responses: {
        '204': {
          description: 'Match instance'
        },
      },
    })
    async create(@requestBody() match: Match): Promise<void> {
  
      let elo = new Elo({
        rating: catmash.default_rating,
        k: catmash.k_repartition
      });
  
      let player1: Cat = await this.catRepository.findById(match.player1);
      let player2: Cat = await this.catRepository.findById(match.player2);
  
      let player1Elo = elo.createPlayer(player1.rating, player1.numberofgamesplayed, player1.highestrating);
      let player2Elo = elo.createPlayer(player2.rating, player2.numberofgamesplayed, player2.highestrating);
  
      elo.updateRatings([
        [player1Elo, player2Elo, match.win]
      ]);
  
      let player1_O = {
        rating: player1Elo.rating,
        highestrating: player1Elo.highestRating,
        numberofgamesplayed: player1Elo.numberOfGamesPlayed
      }
  
      let player2_O = {
        rating: player2Elo.rating,
        highestrating: player2Elo.highestRating,
        numberofgamesplayed: player2Elo.numberOfGamesPlayed
      }
      this.catRepository.updateById(player1.getId(), player1_O);
      this.catRepository.updateById(player2.getId(), player2_O);
    }
  }
  