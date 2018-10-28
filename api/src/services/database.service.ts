import { AtelierService } from '.';
import { inject, Provider } from '@loopback/core';
import { CatRepository } from '../repositories';
import { repository } from '@loopback/repository';
import axios from 'axios';

const isImageUrl = require('is-image-url');
const hash = require('object-hash');
const cache = require('memory-cache');

export interface DatabaseService {
  synchroniseCatsWithExternalAPI(): Promise<void>;
}

export class DatabaseProvider implements Provider<DatabaseService> {

  constructor(
    @repository(CatRepository)
    protected readonly catRepository: CatRepository,
    @inject('services.AtelierService')
    protected readonly atelierService: AtelierService
  ) { }

  value(): DatabaseService {
    return new DatabaseUpdateImpl(this.catRepository, this.atelierService);
  }
}

export class DatabaseUpdateImpl implements DatabaseService {

  constructor(
    protected readonly catRepository: CatRepository,
    protected readonly atelierService: AtelierService
  ) { }

  async synchroniseCatsWithExternalAPI(): Promise<void> {
    let cats = await this.atelierService.getcats();
    if (this.isItDifferent(cats)) {
      await cats.forEach(async cat => {
        let isExistsInBd: boolean = await this.verifyIdExistsinBD(cat.id);
        if (!isExistsInBd && this.isImageUrlExists(cat.url)) {
          this.catRepository.create(cat);
        }
      });
    }
    return Promise.resolve();
  }

  private verifyIdExistsinBD(id: string): Promise<boolean> {
    return this.catRepository.findById(id)
      .then(res => { return true })
      .catch(err => { return false });
  }

  private isImageUrlExists(url: string): Promise<boolean> {
    return isImageUrl(url) && this.imageIsReachable(url);
  }


  private imageIsReachable(url: string): Promise<boolean> {
    return axios(url).then(res => {
      if (res.headers['content-type'].includes('image')) {
        return true;
      }
      return false;
    }).catch(err => { return false; });
  }


  private isItDifferent(object: Object): boolean {
    if (hash(object) !== cache.get('hash')) {
      cache.put('hash',hash(object));
      return true;
    };
    return false;
  }
}
