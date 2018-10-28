import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Cat} from '../models';
import {HappycatsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CatRepository extends DefaultCrudRepository<
  Cat,
  typeof Cat.prototype.id
> {
  constructor(
    @inject('datasources.happycats') dataSource: HappycatsDataSource,
  ) {
    super(Cat, dataSource);
  }
}
