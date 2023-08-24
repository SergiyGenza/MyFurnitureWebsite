export interface Product {
  key?: string;
  img: string;
  code: string;
  title: string;
  type: string;
  price: number;
  rate: number;
  discount?: number; 
}

interface Size {
  s: string;
}

interface Color {
  c: string;
}

interface ProductDetails {
  general: Array<any>
  product: Array<any>
  dimensions: Array<any>
  warranty: Array<any>
}

export interface Sofa extends Product {
  description: any;
  colors?: Array<Color> | undefined;
  productDetails: SofaDetails;
}

interface SofaDetails {
  general: {
    slesPackage: string,
    SecondaryMaterial: string,
    Configuration: string,
    UpholsteryMaterial: string,
    UpholsteryColor: string,
  },
  product: {
    fillingMaterial: string,
    finishType: string,
    adjustableHeadrest: string,
    maximumLoadCapacity: string,
    originManufacture: string,
  },
  dimensions: {
    width: string,
    height: string,
    depth: string,
    weight: string,
    seatHeight: string,
    legHeight: string,
  },
  warranty: {
    warrantySummary: string,
    warrantyServiceType: string,
    coveredWarranty: string,
    notCoveredWarranty: string,
    domesticWarrant: string,
  }
}