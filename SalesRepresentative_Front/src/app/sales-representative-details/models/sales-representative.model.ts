export interface SalesRepresentativeData {
  SalesRepresentative_ID: number;
  Representative_First_Name: string;
  Representative_Last_Name: string;
  Product_Type: string;
  Region_Name: string;
  Performance_Type: string;
}

export interface Product {
  Product_ID: number;
  Product_Type: string;
}

export interface Region {
  Region_ID: number;
  Region_Name: string;
}

export interface Performance {
  Performance_ID: number;
  Performance_Type: string;  
}