import { RespositoriesModel } from '@/domain/model/repository-model'

export interface GetRemoteRepositoryParams {
  name: string
}
export class GetRemoteRepository {
  search: (params: GetRemoteRepositoryParams) => Promise<RespositoriesModel>
}
