import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, title: 'Mr. Nice' },
      { id: 2, title: 'Tornado' }
    ];
    return {movies};
  }
}
