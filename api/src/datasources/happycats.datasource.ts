import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './happycats.datasource.json';

export class HappycatsDataSource extends juggler.DataSource {
  static dataSourceName = 'happycats';

  constructor(
    @inject('datasources.config.happycats', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
