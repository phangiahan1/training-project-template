export interface FileFormatter {
  FileId: string;
  name: string;
  extension: string;
  createAt: Date;
  createBy: string;
  modifiedAt: Date;
  modifiedBy: string
}