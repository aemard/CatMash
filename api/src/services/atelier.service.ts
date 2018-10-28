import { getService, juggler } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { AtelierDataSource } from '../datasources/atelier.datasource';

export interface Cat {
  id: string;
  url: string;
}

export interface AtelierService {
  getcats(): Promise<Cat[]>;
}

export class AtelierServiceProvider implements Provider<AtelierService> {
  constructor(
    @inject('datasources.atelier')
    protected dataSource: juggler.DataSource = new AtelierDataSource(),
  ) { }

  value(): Promise<AtelierService> {
    return getService(this.dataSource);
  }
}
