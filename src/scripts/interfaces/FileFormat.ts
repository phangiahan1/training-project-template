export interface FileFormatter {
  // constructor(
  //   id: number,
  //   name: string,
  //   extension: string,
  //   createAt: Date,
  //   createBy: string,
  //   modifiedAt: Date,
  //   modifiedBy: string,
  // ): void
  id: number;
  name: string;
  extension: string;
  createAt: Date;
  createBy: string;
  modifiedAt: Date;
  modifiedBy: string

  create(): boolean
  read(): globalThis.File 
  update(): boolean
  delete(): boolean
}