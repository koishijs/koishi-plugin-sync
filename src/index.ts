import { Context, Schema } from 'koishi'
import { } from '@koishijs/plugin-help'
import { } from 'koishi-plugin-cron'

class SyncService {
  constructor(private ctx: Context, private config: SyncService.Config) {
  }
}

namespace SyncService {
  export const name = 'sync'
  export const using = ['database', 'cron']
  export enum SyncType {
    'github',
    'npm'
  }
  export interface Config {

  }

  export const Config: Schema<Config> = Schema.object({

  })
}

export default SyncService
