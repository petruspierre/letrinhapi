import { Player } from '@core/entities/player';

import { RepositoryInterface } from './repository.interface';

export interface PlayerRepositoryInterface
  extends RepositoryInterface<Player> {}
