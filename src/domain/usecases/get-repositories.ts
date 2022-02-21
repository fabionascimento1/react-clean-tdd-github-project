import { RespositoriesModel } from '@/domain/model/repositories-model'

export interface GetRepositoriesParams {
  name: string
}
export class GetRepositories {
  search: (params: GetRepositoriesParams) => Promise<RespositoriesModel>
}
