import { Entity, model, property } from '@loopback/repository';
import { catmash } from '../config';

@model()
export class Cat extends Entity {
  @property({
    type: 'string',
    id: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  @property({
    type: 'number',
    default: catmash.default_rating
  })
  rating?: number;

  @property({
    type: 'number',
    default: 0,
  })
  numberofgamesplayed: number;

  @property({
    type: 'number',
    default: catmash.default_rating
  })
  highestrating?: number;

  constructor(data?: Partial<Cat>) {
    super(data);
  }
}
