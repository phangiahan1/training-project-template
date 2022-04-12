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
  upload(file: FileFormatter): boolean
  read(): File 
  update(): boolean
  delete(): boolean
}