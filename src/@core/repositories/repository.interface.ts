export interface RepositoryInterface<T> {
  create(item: T): Promise<void>;
  update(id: string, item: T): Promise<void>;
  delete(id: string): Promise<void>;
  findOne(id: string): Promise<T>;
}
