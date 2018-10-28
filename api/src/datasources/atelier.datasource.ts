import { inject } from '@loopback/core';
import { juggler, AnyObject } from '@loopback/repository';
import * as config from './atelier.datasource.json';

export class AtelierDataSource extends juggler.DataSource {
  static dataSourceName = 'atelier';

  constructor(
    @inject('datasources.config.atelier', { optional: true })
    dsConfig: AnyObject = config,
  ) {
    dsConfig = Object.assign({}, dsConfig, {
      connector: require('loopback-connector-rest'),
    });
    super(dsConfig);
  }
}
