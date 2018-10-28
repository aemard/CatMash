import { Model, model, property } from '@loopback/repository';

@model()
export class Match extends Model {
  @property({
    type: 'string',
    required: true,
  })
  player1: string;

  @property({
    type: 'string',
    required: true,
  })
  player2: string;

  @property([{
    type: 'number',
    required: true
  }])
  win: number;

  constructor(data?: Partial<Match>) {
    super(data);
  }
}
