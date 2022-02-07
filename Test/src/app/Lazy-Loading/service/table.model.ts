export interface Table {
  headers?: TableHeader[];
  data?: any[];
  sort?: TableSort;
  // tableFilter?: boolean;
  // resize?: boolean;
  search?: TableSearch;
  // paginator?: TablePagination;
}
export interface TableHeader {
  cols: TableHeaderColumn[];
}
export interface TableHeaderColumn {
  width?: string;
  label: string;
  colspan?: number;
  rowspan?: number;
  valueField?: string;
  tooltip?: string;
  value?: string;
  icon?: string;
  classes?: string;
  dataClasses?: string;
  // filter?: TableColumnFilters;
  format?: string;
  tooltipField?: string;
  selected?: boolean;
  isSort?: boolean;
  urlField?: boolean;
  iconField?: boolean;
  severityColorField?: boolean;
  field?: string;
  hidden?:boolean;
}
export interface TableSort {
  fields?: string[];
  customSort?: string;
}
export interface TableSearch {
  fields?: string[];
  enable?: boolean;
}
