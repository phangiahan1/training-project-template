export interface FileFormatter {
  id: string;
  name: string;
  extension: string;
  createAt: Date;
  createBy: string;
  modifiedAt: Date;
  modifiedBy: string
}