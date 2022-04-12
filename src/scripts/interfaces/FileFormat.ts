export interface FileFormatter {
  id: number;
  name: string;
  extension: string;
  createAt: Date;
  createBy: string;
  modifiedAt: Date;
  modifiedBy: string
}