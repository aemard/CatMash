import {
    Count,
    CountSchema,
    Filter,
    repository,
    Where,
  } from '@loopback/repository';
  import {
    post,
    param,
    get,
    getFilterSchemaFor,
    getWhereSchemaFor,
    patch,
    del,
    requestBody,
  } from '@loopback/rest';
  import { inject } from '@loopback/core';
  import { Cat } from '../models';
  import { CatRepository } from '../repositories'; 
  
  import { AtelierService } from '../services';
  
  export class CatController {
    constructor(
      @repository(CatRepository)
      public catRepository: CatRepository,
    ) { }
  
    @post('/cats', {
      responses: {
        '200': {
          description: 'Cat model instance',
          content: { 'application/json': { 'x-ts-type': Cat } },
        },
      },
    })
    async create(@requestBody() cat: Cat): Promise<Cat> {
      return await this.catRepository.create(cat);
    }
  
    @get('/cats/count', {
      responses: {
        '200': {
          description: 'Cat model count',
          content: { 'application/json': { schema: CountSchema } },
        },
      },
    })
    async count(
      @param.query.object('where', getWhereSchemaFor(Cat)) where?: Where,
    ): Promise<Count> {
      return await this.catRepository.count(where);
    }
  
    @get('/cats', {
      responses: {
        '200': {
          description: 'Array of Cat model instances',
          content: {
            'application/json': {
              schema: { type: 'array', items: { 'x-ts-type': Cat } },
            },
          },
        },
      },
    })
    async find(
      @param.query.object('filter', getFilterSchemaFor(Cat)) filter?: Filter,
    ): Promise<Cat[]> {
      return await this.catRepository.find(filter);
    }
  
    @patch('/cats', {
      responses: {
        '200': {
          description: 'Cat PATCH success count',
          content: { 'application/json': { schema: CountSchema } },
        },
      },
    })
    async updateAll(
      @requestBody() cat: Cat,
      @param.query.object('where', getWhereSchemaFor(Cat)) where?: Where,
    ): Promise<Count> {
      return await this.catRepository.updateAll(cat, where);
    }
  
    @get('/cats/{id}', {
      responses: {
        '200': {
          description: 'Cat model instance',
          content: { 'application/json': { 'x-ts-type': Cat } },
        },
      },
    })
    async findById(@param.path.string('id') id: string): Promise<Cat> {
      return await this.catRepository.findById(id);
    }
  
    @patch('/cats/{id}', {
      responses: {
        '204': {
          description: 'Cat PATCH success',
        },
      },
    })
    async updateById(
      @param.path.string('id') id: string,
      @requestBody() cat: Cat,
    ): Promise<void> {
      await this.catRepository.updateById(id, cat);
    }
    
    @del('/cats/{id}', {
      responses: {
        '204': {
          description: 'Cat DELETE success',
        },
      },
    })
    async deleteById(@param.path.string('id') id: string): Promise<void> {
      await this.catRepository.deleteById(id);
    }
  }
  