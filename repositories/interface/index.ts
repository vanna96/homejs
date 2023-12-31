export interface IRepository<T> {
  get(query?: any): Promise<T[] | null>;
  /* Other data methods would exist here, e.g.
       getAll(): Promise<T[] | null>;
       create(entity: T): Promise<void>;
       update(entity: Partial<T>): Promise<void>;
       delete(id: string): Promise<void>;
    */
}
